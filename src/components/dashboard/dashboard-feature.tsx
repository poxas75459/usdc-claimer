/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5XdGMYg3WmfnM5gQDKc2RDVGsoWN9sAx9UngnPUsmkG7Sitmpa3zQo3pRNXbDqYfCZ2kXvUmDc4u87sJhYctG992"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58tSVT8dkdkjQGqwRHXDo6m7Yqbzw2yappGH6p1n4Jxm3w5ApfSD8V6NakZU8DKqkHdrrYAquLZ2LTvjtyXd87DR",
  "key1": "5ZXJ2beiLviCS17igULXd7V2BqxMdYMZCjxTbjbZw6SLFbguxuNXc5R1apM3gjiXvrEwyrEgC4KXpUWrqRwty969",
  "key2": "5zkn9ZmqKfbSZKgZzYTfH1pJBkV94JiKwuHxgEpAVo36FuktRYrGLJsTu7iArn3Q2GwGu13dHnizqnvPD6Gchuyn",
  "key3": "5hKTPo5DrBbMxDSKHooppHcspFaaQCRpDLp9b42RT3rtoBQSJuCpwCVyksb9g3fnjKGT6zaLo5Wx5r3VauEUvuAY",
  "key4": "2okNhkNDv432hQ3M6nACiBC7kqUvKkmJNqdCnVEkff8ibJc8YFkLbW8VFPJiZDUFU6ynRsetMkX9si1dx2sk4g6J",
  "key5": "tthk75iuZi1veQC8iRT1W9WAVGDdD2DoYd3AFZX5R86JqtJNnrAY3dgDpvGZ12H2XSXVyCi61YDaAjM3TyE7Koa",
  "key6": "2gDiGSCxpAnHb8MK5PKwqpE2844Y6e7Wskbu8svg7e9hr59Lrf8Uw4ByJoJrcPyXj3gmgYWUVLCakR1otybduX3Q",
  "key7": "5g7rJQeCDa9KAmmcAdrEuRRHkiKfhT2pQmDJTdXn4UJhbXKm9PQ2dhTEEVK8a8JnunoNAeJA3CndKakCrYsuDJDp",
  "key8": "2WY3cZUDQjaQQdtwpQcaXhwexgew68c7UhJzN8JAmVBgP5Q9UYPhwwaKT4MmnyabMBLcTQJCF2kvJArC76GLFMhv",
  "key9": "4rcJjaqMxM7VT8eHaoDChhqqwhdjUduHGRjuHuZFj5PvKi2heDm93YHMFPAndPcV126mtr4kkEg5KDTJdt9R59U5",
  "key10": "3wAVKtHsCukkp7x5iFQAA92mS3nCjh9dqkea6bAKPinMafrprZGjE59YfNRmqSwKPptkpNYNibmDMsao6YsxDciR",
  "key11": "2x4r2D358EgSAWHMfrJzyQezqc8eduoKed3RGzfaTYcRo34EbBg8WuPPPJnLuEQEXU4aVjkdcvpAwW95oiceiKy4",
  "key12": "4cJA3ZF75QDQ1Xe3uLYuk8T9DqH2V838pqWv84yA8i4bVJgtvPhDPks4SyHd3FwBAkfsPAhuvYkNzh2hMk7QHiox",
  "key13": "5hsaThartHCK2xwhh4uT1hgBhZN2wc11MZXoFh2K63Tp2eF31Bmrjd9yHKDD2FjVtH5UFuKz5Gt6imFNARZKHhR7",
  "key14": "4b1iArjvDbBZxf3oonoYywwj9j6Cgoby9GG821Ux3aKE6HzdA2dvn7DZyinB2SEDagHiAsdevWX5NS5bVgXmqM4L",
  "key15": "4Rqv5TJaVztvEuKWsZ294rhk2YptNWM7n3WgaymadQmcRQYiChLar3xxEWv8dwxQmgwjHreRiLGA7rBAGZ84A3pD",
  "key16": "YhxLpL57wZXaG9J1prbN1pMfWiHXYZAxvfrmjexjwBm2h53tp8DGR1vBroucJv27YxqwYve5E1rXd5Qi3a9FXUT",
  "key17": "2tkJGppi1tc36NEufU8pGt1kkypKnBzMRtMwjs2tHmSjtmAYCU6biX193dSEFjv2pNsQbuZ67aeTDoRrMrW6ZfCJ",
  "key18": "o69ZKm4fKVUS1cLFNMkgshUXEQVzxg6TYDoKWmrm3ngQttwQrcuPhwovMKpoiACjY1ontEN2KbKL7PPW2EWXJYm",
  "key19": "3MZijq25nbZT7SoKrFwaBfRyye6Lv4R1YuYkwCfsxHfEVBpC3rXwt2xcm6vtE92abQfCdUkPiaJXqDCynjApTL9e",
  "key20": "VcM5K1Z25Ee8XphLf1Suvcv7V17H3MfpNDHsDVQf7rW8a7VXP62RHT6w3xSaeBnsXTEpej3GQtAnzVaht6oUauL",
  "key21": "5SbB7bxUQg1ct93Rubk9yiHvVVgFQA6R6pbkP52PCbQfpEFygTqhsepaCrtcyt6EnFndB3hzb6xAnQJPoFidL9aD",
  "key22": "3x3g4BmVzXc9LkBAaZ58vX1emEXEA2hYFfXf5Zs8rrWCCiyxhDAXFAHVhNdoewJ5tXLeYvcYwy54uQXLPV5CxtYv",
  "key23": "4keKm4sfg2iyEPUzrPjrGz1fstLy91tot1Tnvi2frjMZBLDn38LQYPPh8kyTa4oYoQjbAKJUHW5dfpLhRuYvDQP2",
  "key24": "565Zd45NLqE9nytyjYB1mSsJK4cE5wSqtjrzMpGyWrF3S5D6kh2Hmvn5w9cBCKtjB6cUVy1X9TdcMUuHXTxCHdbn",
  "key25": "2qZdwVtE8otiGPefAtCwwCNPs1yriasNN1DxEJxh6vW7WcxntDMj1MesXtDNwePEpNZTRGq84U93PhfZRaH14opo",
  "key26": "3w2Jf6YWZgYhFZcjFZb8tCCjRopCrWhL8ubCieptmiXUtaqRMyXKR9zNkJv1XjbJpnExDpb7rL238qtahQig8DZd",
  "key27": "zgbetB8QxqS4dgJce7rJN2zofP1UztcqxzbT7oFzGuQiLJ43NBsKvEyf78kMnzTfwfbyfBPrtPiWLD5aAh6NadU",
  "key28": "QN5BhML5A4c6gqwgtiY1zVapk6qVcfm7cxZegdZQNsGMrVSTdULEvhkDhpo7oP9yovRfiLgmmh8oFFavCDWzwii",
  "key29": "h4YZvYrmmdThB7vidtnQ5ga1Pc1Fvn9RmnnNqqLtHd2sEnQwcTuBCj87WriNvUsDeKWk82kQq4CHeHRZS3BJuNM",
  "key30": "3BXNy9PjuskKJk9hDJ3oh4ndMc3stw8hGu3oCq86Nq5ne9FSqHECuLSe1QT3JK7uLkZGFXn8YVUjoLtKTay3722S",
  "key31": "3CzyWgDAdwuLjQJ3pNfuepg22aTwBSo8DLA2SuKX54pHYdr4c3CnroU9co7SqeyHpTASLBdNHLotf5BTXUa2vsUU",
  "key32": "6S4vVuEKwCxr3Mge6mtubLNJwVrBYbexagn9WRZ3TqCgqYStfV3kRZStMNptXEcXNmGJXA5HWNt4QiYa4CFdK34",
  "key33": "4BtqUbqEUUAwj6sY8d3UV5Ch6g423YTNbaqrEdmZYLzoAWbd8KWgoC9JuhpXxV6QEswrApQYzpTKkPe8RhrqFFya",
  "key34": "2QEcTDzByckmCc9Hs6S67X2M31WFgqq7r1hPyJoV8HkX5YcawvYD7BEDdKztQD5aCXxmCeqmNRU1iAcnAbcdRT2r",
  "key35": "62h3aNNzujF84YBEWPTw1zvAPjdSye4E4NneV2xUnvhEV2gMP9ErXvQSxRsJeVn9JMX8GfKspNxqAr7XAK1QWbRX",
  "key36": "oaNLWWW8EZkcrmhAtgQsou4c1NZNWz2myyrvkmYrgMPYsS9CVvoR1ynQXUErdxVGiNovkqkQKu7uAhQzQe7sqEU",
  "key37": "46jkse9KemhcEvizX7Q4QC9wNKuCtZWQbWaiRHfrb3yPaXMeVMLtt3FH2GBWJFTJLmgHLLRJCQfzgZUdCYSFR8h",
  "key38": "5jgh4dfiBDyW2B6VotZLBUy1mLqPhoHRDLG6ak6nT4vHSjFgwHjBLdVR2iwSJtQdG2FGkaMn12pccbFLqfMvuRPJ",
  "key39": "tixT12ndfh96NnvtM2YLCuXyetj14tAWQSmPEBAL812srvLXjhznhJQsy8oS3J8zT3W1eNdhNeHrrjxMFfG1mCa",
  "key40": "4hN7mAKqdRFG5Us9QwD2LhjMxP9A9zunxaAYdyPy9gyhkbDTXD1h1JS53K6UBFPjZA2sFaTkEtYqs3k4wqizCgoy"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

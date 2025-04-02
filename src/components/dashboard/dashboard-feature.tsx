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
    "2fi5ZpRCMhq5MShJxEKXEWsKqaySDt1Tyx81mqex22mdYMV3i2WgdmneJY8SDMw1gtPXe9W9bCDS7AoVVauc3EQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29rG8gyARvygEByP7CRCF39Vo4TA1MdHKgRQpadWQPsAZyMqV4XFZQqxEnMVfr47gfAM7DBTTWwzZdWcrcxDonoZ",
  "key1": "528F5f5KQnkr111ChTy5nQD1nyk2grTYsrreU7ndhc3E5wMCDmr6fUubT5EGvtfCSQXhr3G4267EsJVt9WUrHqp3",
  "key2": "53GkCYqWPQMrHy1NiNnYbqZKUZwV5v41wMrrWL9FK4PFsW48bmfgZCTJRzEtLk6fJMiBhRXpxYNBbtjA5Bt2oD44",
  "key3": "56Ky9iwVGBo5igzp84v1yCL7jDRnqmqTBVsXh4JwnRoJ1SJTeMiJQnwiVCX2VCTMfxrbtEy8dUUEPz4snzbBdfpY",
  "key4": "5fExeyEU4eHD74FmJYxe1sgNZGMSza2SbWbV8ujNWddAGuzHQcUFzGr7LBhtzNs8o9svxDQf3eBTEMaCvWF9Ahbf",
  "key5": "2HZqBaZ3GhCA5d8x6PGkcijHugkJmoW9RiurwnG4DNfTUDxEfjMrYKPfykQBXcQvreZxaPKajm76oSrhg5m24C5d",
  "key6": "25aWnCVZ6VVvwjLVhnnRQ9hqn1LpudHaaoFVpcStCtsQHPGMvCHMPaLsVxjeYZy9yzcHZPZvsrAWeWKoFq3D1dD4",
  "key7": "46mZF9azhqqfniccfxCHFSjULVCt3mEUbPN2P4tPekiJgaEm9BBAJ8pmm1woZHH9HqJeayCuUMvDRHJbWNgshkR6",
  "key8": "5ZF48vc8X3h54ibyTBiWAqLjzSVBUgDgA33nrv7HbdnDDaNJENTEfvUneuMf9HS4y6FiY2vbeMtx7kzwdXt5bq6L",
  "key9": "5BhGLAaPuBJDvLsRrb7VtiDFyyns2fYuj4DfHBkYpyWbQWuiBBnypxrNXRrRJj73JKPKPNcPMwP6HULvCXKqXbE3",
  "key10": "j2DJRwTTf91zHzX3xpfg21fj7RJysqsdWyf7ZrbUQ8Kaf5ycpt9caxWMgp92FSVH8tqz6nXg7Mw6g2anJFb8xrM",
  "key11": "4M93ykNipg6rzihddfCWWqgiJrmc3K8ZC1JgBooNyBxXUC2CbSmDycxCaKXqmLYyMxqm2MVtK26qKWbfhtmJJBr9",
  "key12": "2VKBoaVsBvKie2TXo56A6roAtBRiXAJLAx2DCi1bgKG3TBVdMTVYHbbZqACTH2oytUbL3Hgx8yFbgQFzrd28QMtb",
  "key13": "4Xo3P91BHZodpXVjkZUJxvy7Y4YMLhwxbqkXf97tNgbRofLdbsv3ZhhnxgfXT7V9NMfy8HNqhhuDBUXHCBf9EemG",
  "key14": "2aDpyePXTtpPVNTY1r44BasLKau8rbdXcvEHkkFHUd5soJCF1rCyqpFNgeMmaghi6HYqqGTudEyt8jenpsqxMeGh",
  "key15": "5kzZwLp1vEFBueaQdavCnVfCadnbAcLtzsQ9rje8hjJVZijJwiByZfCjXW6GSWZtUynLDKFw2MUm6b2vqVv2Z2FF",
  "key16": "3jUoinzcYqzhPH52KwmJ1iq1ECLZ23YF7zuerhcZkCt1fjKFSMnfPKG3ituoD5XV3b2mJxMGGvNGCLckjntCQb8W",
  "key17": "4LUbAmLacsHXSFTsNfgZNAwCN28xFsZDnm3kDCTkC6yPX1ry1dD9SpwshGmRKzFcJXkFV8obqAYoHefeUexeapCh",
  "key18": "3Mpzf2VbPVrkW4EvePJWpktoStwftxx49QVkwGgeLGaiAJU1wuYaC57dBQA3KwsAnzEn61gTvfMuKSPKPn14oX3y",
  "key19": "4dfP2bacygQ5C1FE96tsFiTBAZNwZMnFozwLjYMR7WSjof5WJuK4YwmCuU9P9SdKwN9kuK8Mun39ZYJYKtZsBoPe",
  "key20": "2oRzvKhZJQB1dBjyjhf3QPfbqd6f9udAEuQubd7sBPBBCQzGrCEtwiTyo4VWdnRP9q2ox7ofGqEF35bZNvYXGdZX",
  "key21": "5gDDMGNHtkHbbeR1LexZefFLHtsbeKPzZxRBS34ybLjtb8BtmMRVW1Y1okdH9N1d7zNQxQJaAzK8NsxzzLsAViTa",
  "key22": "4n3EBnoTUv5LGMDMsxDPJFUJ7rvc5o33hESg2ZQVtbfgsd52ZYZBRMugQ4bwx7V279GeSud5bmuew2b5WiTdj1hj",
  "key23": "29gfiu588rcahPZaE2mpqifhj36YFuJuftDwpWJCfdC3KoEreCZF6EHioBoACcpgmCCd3nQismzR9toguJC2FjDX",
  "key24": "5quHQr3wVgRcZVPtvHkKUYawbFMyWyStvouLBzgGSJXUdooCbtKLSwKGtMCN7BEy4bFoa89tcGWHduhx7y9EgLLG",
  "key25": "2Btk5U9LGqGq2wHNPQqhfAqpkG4f7LfyiRcEh4YiHYEZJJAAYRSnXFLASxTtAe3ix67semGDY96qJe65WeCeHBpn",
  "key26": "4EnmbmYoiGzZ7kvNUy2K35WDUkVMbVN65cDpTj3CmjSqMPXRJx1gpQDwK9JQf8KXbvdgFFpSU9VcfiPDUk1oZqMs",
  "key27": "3JXGWyGWGGMvR6LAo8Ab2wwTxHQZdFvpATpx3tFEphJLNPFmSPbHEEmPp7hq3AwRMzWWrcfVinXgHU2QahmMWAPa",
  "key28": "2z7hegeQTENtnmqnh3RxAns17aZMvrHYin3BRg5hwgXfPeu1rCt2DDgkN5XH55BZKydj2HykkW5LL1qFfoDitNvB",
  "key29": "2GiixBc3FvZNsusaCExmbFyha1cHeGbDb27Fmd5s1oCvXhLvFhEXJfJxpjjYpsnwkCgihk6f84Yy2hrjaZTkNbwn",
  "key30": "3x3spSV6ExhRqNMDomttQ4dcbwpxFpqv7sjBhEhhQj52mDiPL7Ptq4bMFkm68xsZTH7LYRRNvHZ7XMVuJ28XLHHA",
  "key31": "5JLKbKVCm667GM5yaXKS6rTbPXRpn2GxMRSR3FmGeNk7w7JvV7N4xR76tPLz385t3Rinq5q5rTS4uogb4mGztyrx",
  "key32": "2i4hzrdcBasYZvWvtuoGPMWw5Y8hcDEMYx8XZ2Az1bvuSRCKiuWocf4rqiVQA1kpoWvdeaK72LrEBUwnKwgWzynL",
  "key33": "2HSXLnawWSRoeuugLcy8XsYzq3P3W2tmnVnhX9WkagiHahcSVwm5gTsqSHKifvSpwLttSZMkxNjcuwYfQ1evoPXo"
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

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
    "5hoHeRwEGKqwZnZZNpkgXvPMfR3awGLDJHaYg8P8oXGyfZnTGVQkU7yVaV29oHCuq4Bt2KiZJLoeGioyFQKSEobX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SznzdTYnP9HSZW7KwbyLUrYZH3BqY65BGbpzGx5GE9E9zCYnUWSEhgG5w8UcBEWYPhwvgCvydC6pyejnTVPKRbc",
  "key1": "27ESxdPuCGR7T4nH5aeGSWrMBGiex4YH4ATKdMqYtpNMDr3qxJWtmr7e9VX8fFcEjAv4PkDgKWMnmfnP5EhccciZ",
  "key2": "5SygUX4txBtGHm7KRQ2JbtXP6paDgEueRyHJvRwtAAQG8RLU8qsbakK272DQweCoXY9znRX3KDWbmxZUbAp6JocR",
  "key3": "4iAea4PHv24B1ied7wMzB2vhhhZCHBBKnGwZujionAjwhVJbeTRkPPw23ygvs69jbEYzRL2sBNxVCwEZrioBeerN",
  "key4": "4aA6snA3ZwMitpnDCS5DYe6UqLAP9v6LHrmTupgLBJW4cUF1Eso2EhRJSW2GehtzCTD2Bdpbjx5cdd96nczsXfgR",
  "key5": "5GR3b6EhZQb92DL4szb96tCAU57c8gBsBCShgdaTf3ihhGsdrWwjDrHW8kdJRWhrByfRcUbDxwmBnAZS766qEZmM",
  "key6": "yDcmAG3mLRVZyNJwKRSjX5nSN6bfqxcLyLnQW1nsWGjcT53yuaEX9vtCMGTihzmBDhXA8tDBkQBnk4T1uy3frwK",
  "key7": "3dRbTgCAoJzxYXp4XjLouxT9Lg2bWm3gTimNG7JftBMYBz9eoWhwQmER2QFZHT6d9b5aEjLfPptmuZnQuy68ha3G",
  "key8": "4zW6LbVbCSmmM5Xp8iqNo4jffcLNNf8fiRUCVLnM2o5RopZoWx1wF5BFzqdTx6NJPye3zERmYwiLa3Fsjdy2DMyf",
  "key9": "4Xvz9tikYUByne1CCKZ2eth1nuJHuU7GQ6Mm95t4v44GqASS8QQiMbYdJvsCucPeTEQPAz4EsMU5jhg4KBi3mMg7",
  "key10": "5W3vtCRqHiSE4yFrSj7XZnrdPbJ4FkuGHLJVJHjY3rf6DfFsi5GjBq4dF4kdFDaZM66Q5iSuiHw9mJvCpfipQ791",
  "key11": "3LFa2cHxU4HBgNXU1FMSX3F8bS9ww2PYhDARStvNWBHDNcbXmgM9E4PYn38NtXg7NMDa4DWW84wgLKG3N5hRYzws",
  "key12": "3RiuFTbi93NpRn5aeigkuy5TYjxgimU6WFadz52x3yikxSBW6tqyjxzHi3J6CDFVmhTuZpcvtTKszhQDfrg8JSWz",
  "key13": "5kgFMPTMqxMti5kfc9u9yTrn8DErGBRs2TBqVPs3wZw5F6to85g3sHAxhrtR127nwzhP9vCQrjJ4rSatX2L2T1vd",
  "key14": "wWibhAKeTMfNmEH5dA4aGkKLn5qsZBhqkrjYnnwzUnzorPvD3rKGQqoYsBmPotRWSoSKXpsQ83DweNQAqdu8Za7",
  "key15": "3n9ciZju9xMZ8HY1GRNNgF7JAiTaocy97ALVmE1VvCqovptg2eYBmnHveSNHMEaQrVnHCjkQD4mLAbhys5Pr6wgV",
  "key16": "2EHy1UCZEc84WFkAM6b31Xk9MV83KA8vS7eG49YmcVEE55jRiSdhTvFgC9kBamK7TcP1oScA1pdZe2fH8cGbkTL8",
  "key17": "4VNb6Fst5yUicZLU9btvgQ49jUTPZgmrWGUSjEafy5ikTQM281PsQgBNHjaoTGQyoVkzZvZELboz5zmq5tFH62Yp",
  "key18": "tciv5VuPniEUmkLn9yAYE8nbGHwnsEieYjY7PXRinyXQr1agZgWh5UZLXjsYHLtCMt8QXE7gGkEhPmftpEQHKej",
  "key19": "4nhNVT8NwhGX5qNsgW3q1CHWzpPgMP1vjKHramxxdFjhbS55cQFj9yr2aqCYNNaTGMRUP41fnpSa8LrwqLdiAmxE",
  "key20": "5HLa8kiGWVsLvAbTjcc6tE7E8ajFEF9P2Jzef4PSM9QE97ko5rKoii98LfURYf2bxY8Pwrenaiteeq22La4WrttF",
  "key21": "3HgeTRfG8qh6HZfDaEzkaPgCrBuPPS7aAtzmfraBsyB45kZJ6cZvQkdKqgHF4DWAWwFpL5w5PNztxDkCVogcsL2f",
  "key22": "2VaYt6fcBRopmjKWkH8oqXfZodWnobzenUNBaZtHYjHXsFxH6AYgYKJcd7xR2nDbGUv4gSjJwuvoAGBiUjrSZBdT",
  "key23": "5fnjKji5PY76C2j2wrxUAjSb7NjxSAwBdBZGrHZwygBRcczY9RpjD2yeRRQZYZCTvozjukhDVvhtZfVKN6E91NqZ",
  "key24": "2NqbbA2DheYQYT1KKeNPR3rf6j9KXisW4fPfEf5Psw2eEumoWvtQqdmSWQ8CnZ9T4HJFGjPu3Pi73akbHiCQBxZ6",
  "key25": "28w8ACWDjxBa7M2WcZNUeRcFCUCeyDwo4SthPaEw2pAjjmBr5vFuRgvkR7aYhjeLYXMCJVzHPMWE8eSueYyNJBRH"
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

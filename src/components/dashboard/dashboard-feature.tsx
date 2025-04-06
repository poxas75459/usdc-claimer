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
    "2XhKreEwRPijhHotsgTL8CkEtj6Lntvgy6K2kCcHwsmBpuMcTWAzahGZ6udgvDTjv7E5H7ncLZmba9THhwxwXpmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kzN5FXKyrgtj6kiNojd6LkbiXeBBFac7ocMrNpmBp9QvDeEU2bPmK2CUZxRcpCZb58Bq42F6mRSKSKN3ke2Xc77",
  "key1": "5yKMVYmvUoThLZMKPepGFfSBzK8RN6PoBN5Dso9NYtdjwvsEj3VUnkT4USL1SzDsQPLAii6sZ1HUkm193Htshoz9",
  "key2": "tqaTv8FZ5c5DvekvWb4327cgbtVRpRiJWTzqaLJxRy3ysS3DUkZs8QjMNTZqgcpS6ZV79griHM7MNpyNx3SNNsJ",
  "key3": "J632coLM22JRL49sWcPxUtXnkCUxJ1jFvxt7h9NGu2om8HU9JT8aC7JP8DJhsDUYqQLrUo8evUv3HzZmyo5vnDy",
  "key4": "4vXzCniA1twseneAZidJo1p4kJRwMK7VSk5xKwubMBVPWBwjXcq6UTbgYxCWurL5a8tTTBWA4exSg8NWyy6w5sK3",
  "key5": "6LL7jFcy8CjimN8d85gipBhMP8Bfcx2mVxBEh62CPnx378BsPAa36HcEbXxxej8drLUcDbMwemabsvLWgoSW9S8",
  "key6": "2LdYABpD6gsdhKBKQ47E6SkbgaWo4iBNqfGZDv4ninkb2zeFBycrVEfq1qrb562LNJrwiYb4asMjUJtbH8PT3x93",
  "key7": "4hFXTpG2a3ggYH1TtXq5Wzo8ZoT8FiYXy6iWKLp9phGB37WyxxDP89NydtWCMyNLnTfLfveWZXT6Sb6MjCQQ4ugF",
  "key8": "5CgGpxPAMG4QaWcJv13RcKP5RFtQaq4TDeVzaCQXkvCy3g48foZ7TgUf9ZmHRKWhoEvsgrJvfdwG72HBKsFypUpR",
  "key9": "2tGF6BD7tVwVrx1KedudRSiK5N6nZNWzw5AqRjQtdJxfYehkCbjqhPfLPuwMwxkQMCQ7fWmwWVmF9WMCg7teaELt",
  "key10": "WTS8gejWkiey3BdJfGbYy8NEsLPPTgiiAwdrKF2mMLxAEebxD6TapXgmUGgkrfNfvNvEHCxdp8mytR3bvPFeTjM",
  "key11": "2EBz4x8k4BZeMDYXLDYmbTcTgWQrfHUepmJeWRY6JiGCyJXhbcXUEoC1FRjE4CiPnYPMRxc2kjymfsLhTS3bjffZ",
  "key12": "2dCYCLfcKVmDBQKaG6PcShynVtSH6YFyrpEsJJn22x2gXnu7HVAp4ruQxGHr6vgQ1MtfJmsEUcUTvv6NxsUbzR1E",
  "key13": "3QosWZSjPobcYNtDs24Ro6CkKtuNvkrzfeUVEo7kG275DMGBSoD5A79rBBzuGaceoUJVFY4e2Ng38Ab1sZ9PxBJW",
  "key14": "2WfPNG7NMwnsAkrdEMbubBosNvrggVUTTev4N8jTrMZCMPhA1hzjMqCcR2vpeNzsRhTSHX5gz8AaGXbUd5piBarM",
  "key15": "3BnbVLmF38mpidQsM1gHBsSUbFSnaHLTtokrrcxmf59Rc93CbmCMxD22rok327wADNTArxQyDGzmCFYiL7nuMdkS",
  "key16": "47ji1EybgNueQ7YKuM7UEs2pMFSXCNCycSMbjDxcL9jAH7uX65YoshVBGtWhuy38AMwtigZ2uz7Pdk9J1hpJb1aS",
  "key17": "2GsGTNJf6Wc6wztayWszvUF6EyKPdvyvZX49Ti5gimvNxjeckzDoR6pHBABffFo3XvSxmZ9HAYCUBFGq77JDMzUV",
  "key18": "4ipKnsGU7xbns6kpYLB3WnVvxfspHjcwdBMSqsYKkyL8S38xFURKQdJGSjfQQGccSj5SpVwrxcXBnhucZe8jGH3j",
  "key19": "4ZiiJth8nJX1GRV2KwHXXrr1LeWN9Si9ouMfPmFXwkXZ2oaVDjXHqgPh3aBkwp7RihpGrP26bwzLSys6wr7QyhVu",
  "key20": "3PFv6Kj5JxDBUT3mwRd4YArzSdhPHpwtyeHKk1UNfw8GQWsAMjNUw6Md3bNc1kYYZ5gLrpc7hU1JP84ZxM4NDigL",
  "key21": "2XDKDrQe5aJGpfM24MmQZosXLZjBkRuaksxaTgK4yigJkdc2CxVbCtrc1HtGkWmHJo7CyGP7MfaJmX8YeexnTeqV",
  "key22": "vYKn896T9JjLAktm6mKdrtQyHg22kyD9VGJPWK9yXjFfCHeGa8iqRaH2bQqrm5CwHLRQg9Ga8bdD99onyZVJ8sx",
  "key23": "4QebDYR7sVjamanjY2qu11RPTav4vH7CpLPJqVGt3X3BxzXNpcZ6FVzeMtMZpig4zVy7c8jKCmPisLgRrHMZFW7L",
  "key24": "41VA7WDzNUz4L67m1KLfzrQBPUrQqZNbs7YJzcC8LmCdKoFjKwwtinrtjNRbWBx7sfioykribTw29rTZjxzH4Hst",
  "key25": "4CMpZGBRrQt7czVu5uP8qanTcCkgBMgH1BZPE1Y78QApDZCcffNpmoGWZs6XV2eL5Zte15sopFqSbpLwjxPZRdgE",
  "key26": "2Cusn7kD5Px3qvstVF8gGnW9dPFtFy7SBTNRFXSexq8KS14n2tCM6864Eg1hTdcGupmLrXG8k3L7z2scr7SwfncY",
  "key27": "5LMqfnmE2k96xp5F4KszWLF7AW2kSfmcJnPRLqrPG1wheiDS6SgJyWtCwi2aCZPUL7tvMNYywtvxy4FMFj3y7atv",
  "key28": "5Yy3Mb4PSSmeT78fodhPGLk42q3zPtfKWmF1GuZDnFrQqhsChaTPdRDrpidHQpPjRF997E9wVWCwm1ENECReVt8t",
  "key29": "hvihTCYqM962Q4fPHUJBSYWCfr9cFLRgu3YniRDhuCyzNmLdvPwpKM6FXjZnL3tE5z2q6trdUUJFC5xsR2Tjdfa"
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

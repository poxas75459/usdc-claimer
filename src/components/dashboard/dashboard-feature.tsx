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
    "5Ysqj5aRsPPCo8oByPJAmp52nuaenenwNhKbLv8sTAHxgzY8duZG3gUWmKHTHFySN2P7mRGerMugzznMxwKYmpv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cDYvciXksZnFJUt8v2RNFsH6juaazn3ZWHgH8rPxPDGuTxtswUSZoa276vFLdmURWzuZbfiPhZT89PMBDLbg98j",
  "key1": "2aTjUK7jAb3C73Fs7ui4DTvPd4pR6TGsVUiLN8kzPgo82NBHyZbzahqLwixtFiZCkn4hdftd5DYqmoxcuhLwWQZ4",
  "key2": "41EnidMsWp5M7H7yeRgQwBVRqTKxi5ux3mHTKfpHmovgre6iNKXF1xHn5ak1gpUx7rrQr9o6D5J5ALyX4RteFb13",
  "key3": "yFw7G2yKBMPdbbDsemDJbjDgZZwspkCBK2SSo86YW9gyPdZMj8c5BuHDQQu8iumVTEczooCWUD1NCYFiamGAueh",
  "key4": "3mm7XeguDqCqn9w2VKzhhMyrtMkXTt2jzR6JUKCgiuSFqGd7GhEEwJENPWNFuLmRxrCRSkAqSmY24x3rZFX6sjEJ",
  "key5": "EpZ5Azay14T5z3T4b4vqViepZ1jTvzaEM6awSPPiwE94C4Vjh2kAiAHVmPU9tZRvgHWD6YcWUwSUeN4qjmNULjj",
  "key6": "3aS3hgME8YF6qKpPZC6NPHfxQTDyPSEorTGZzRLwSN4DN3Ru15W2UJp5639NF3znnQ6hXbch8ecLmvUs1uFWEVJ9",
  "key7": "3h7JnMyXmpXcVRP1dV1ygorGeCdDPy5xAsyi8cnPL7bQqNa5J3wq97R1X7g89EUNLxXgFV11P3F6vhB8efrATJJq",
  "key8": "4aUt5xfNPksXxRsssZyTazcJt1u23JoXSFm4DntuVZgtQazVkFakdjZyjL3NkvuokiphvL1HFSarGQsw1h6jofzD",
  "key9": "4YzKcC2HrUaQc1pzDAVmbt41TLHHP4r4SH3s9dNKPSFrRWis15xcg5YPpmoyNAjSKVmMLGRCB5gd61d4Nv1uv8v4",
  "key10": "62kE1A9sGPmPbLKXPPddkfujePyrf4wwWXvVrcz4ZhfJYEZJgef6jNTpnFoqKm4hG3i33juuwqVFu1Hsj2HShZTL",
  "key11": "4KBY4uKcd3brGZNzNjAvYaxXo8xgANcmwVhhC9XyWfqLYq4VtFpikuabZYFPBVTJ88fMaUaGyCZbQPMuJEn3VVFD",
  "key12": "2rHoVy3gk65mE1VbiapFSA8g5c2yNM6ibLAcA5pRtqQ9j8qk9mpR4Q2ZZZunLrMTMKUnXLXNsxbNwZEpwJQdHqjQ",
  "key13": "2TLatSNp9mE5htc1TU5HY9LSZc6pXvi7ufHJGvuUqxWSFCCDactog8L1YCPLkZ1Yd3HHhMvTnpKpuozcwHSUyQkT",
  "key14": "63yZUEV8JfyAV5RXd4TcyR4gk1B3Xk3rZ9SJGi8yBPVfqes3cQkith2TrnBvEaJkoQxcD817ujmPvRidmPJTCAmS",
  "key15": "671HwFfhsq88UbX26ETSvWbVKxZbv2U1iBFR3sBDARvELSL8vzs8QANenZ3q5Q6pCTj1kwsks6zbq1PbUjXFMT1a",
  "key16": "4w3SF4EuiScsNQHeV8JhyXcoj6bMb1iBxmXGfk7y3bWHEFPFdH66T2Wv6Mxh1MRqkk5nfvVUNg3sWaWkQJdLC9Mt",
  "key17": "2atvJm7mT1vuiSbXcyV3Me3bU7aQPHZcmnR9CWjdp1L2H46zFGfdFTrAswWTLm2cGJvBppgAftk7Hy4PeCrf5HgE",
  "key18": "7wF1J35e5Do3fyLXT7x4SEvqypYPUcRmkw37kJ2rbqJtHjTycEshtL7zJ2Z8uxbQssmUwcx9LvqBSP9npTTZhPT",
  "key19": "PXmCHaRwYbfArQMs6raz2Rhc1zHeondi7QDtn4wsBN1EjR7y4icdyL8ptu6prk4zKuUXQGzkcQGCRaHUHU5fGWH",
  "key20": "4B2YZGv2ZLiRAB8NfTX3gh6CwBLybRgLdtVLjW2ueYcgY4nb8Tx3DWhKCRokhB1Gfs4LZ2WzAVdBUtNQHSZcYZL7",
  "key21": "3UYtujSsJNbivj92CMKj4WrYxHTNqLG8f7FzHojrpUHUrZtA9crLzmsK4X4DG7Xb7fCGx3rHot1Y9CMVfm2LMQKj",
  "key22": "2LMv7CVuGgggai3bjgucjdFP9anieSia3N6yPEEwhSYPRheJFhdFcfzgyBZixR3aNmmv9z1rNyemEo3frGAzsuau",
  "key23": "LYHT4D7jNmWmAQmo9suqhXMQsjgdL7Kta8rWebbkXyhLwam3h3DfV7SHCo9ayZSk6mz8sfnyVasgJGGHgH5K8QX",
  "key24": "66m84aoXTUU1BGQEqR39rUckanQH6fp6eif6YmMTuXvwmEdwapY2cxiUgMYuKkE4Cpe9KZZcLRnkwSFaRDutJkmp",
  "key25": "5fudDU1RBwpuTKqA2tNQ5orRakQygdvhNgnxzHh1JLDVJQiNRaZ4SSvTfoY9UkPcAX99QF7Mb1y2hcrC19KgASXD",
  "key26": "2ESQuBviD1nc27yv96DoZkmJPdAM1oXZK8ZjngG4FAxvvtdNNvANiiQEfhgoUaqaFVFGjtJpBdZJvjEL8UkR7pau",
  "key27": "2mz4Ga3h5SxREx8bJAdvZ5td7TherLA7ENoPS74rZcT7HgLrRjgzxJEaFX2qiF989f4pP8KvhAHEw8eF8Lb9StXN",
  "key28": "Qks6qpBbXowgG28yAqbYHzQHWMdGQtM5XkGdHahLWG6Rwuozfpv5X1FwMFWqK2P7XoCNgWDZCSvrEEQdpZDmmiD",
  "key29": "7EUXL6Wdoj52EuS3bA9qmQWvp4e6T8Sf2c6EGVjLsZutmNfAPyx6ToXSfmD8SN7vMciSdYiqc7o492b4AwakJ6P",
  "key30": "yXJ9dKqH1xpApMrD7MC8vb5YuUeAe1CGNGYd68dXQb91SydKdWFRPNbNqJzGirMyXe29xWnhHL5NKoeLYQug8v4",
  "key31": "4QXnv8KucYKAD5mEugFh6ubDiUNGZE3TsYVeXqynFVMJC5vCBLetHsRS4jr7jNqHPWEMNwDxUwnVko8JD9VHxC5J"
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

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
    "yVbeNiDZWHXv2pRZ1K6ZKqbf8M6sNP8JBiJNN14YMkr7Kd1TfBXZXqv9ujxf56SaiV6ZRMm2S6iocY51r7Pe3xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cb1UVzPCBaoMPSVrub7QERMdRVmcugKijonnzz7qYGKiPuoqQ7CSbxnZahb41tSfiqLFyiJQXNJa6FugH1s6SKq",
  "key1": "5PGTvf3CdFT4kf8uvNRXU97CCvViu9QwCFaeaKDTw5aLDa5iAc8UQG98fMGwUTyNTxeA6yNS3T63ix1QrWnxFTp7",
  "key2": "4Wy6QLkhmPe4YnSiLF1wtZmHzffwXqDjjGi7ddDSsQLtEd5iJNmdKnD5VX6sVCMZzPuRwLNFMUS9jtgoH2EbS9CJ",
  "key3": "4nSQGEnwLtCWQNqf7PzQf2Jd7m1xVgY5EVMtpwdibxa553K4qcwFsAoBdfDjtmdhjyTca214NJ8au9PM8pyPeCEt",
  "key4": "2dsrjhqyume3t2bkmmafk4GXiWj6ZeodSjg2xkRK2XpuoBNBo6gZa8Ak6bLocr5KbLVbL4woHKEjWMmdHWEK5cpg",
  "key5": "3VQrEUXcfobVUe4bZNiLvoz8REqC64iMkwWQW9LawGG4wfHEXCcP4TSSyRVAaRmQG7ZKBJnY4ytYrjVJvbG8oRoU",
  "key6": "3JCfH26pQvZQU9Z4iBqyxp8oZ7bjTm5HYUfMhkAnUv4Wu3XAeXG4NPCAzApMks5NFk1mVkdqL1JMWr1CUQtWQCM1",
  "key7": "4ycXvB4RusG3chaKAacRKgrCQ4ZzeFKo8WTfXzXrz1kixauJG1xy96Y2C4prZy4y3dFBLehzTGbQjb4TroNmKnqq",
  "key8": "5mkXjBpuUkNnvza9NGHkWnDP1u3WoUy55TMyfaoeBDKVoG6YUc6WJHEFSsve2YaAaRoh9d9HamXhNTCcXVxq93Wz",
  "key9": "5bykdoheyJUmYragBm2DxgTpqa5cqAHZhtWoqEuUoeuzTLGtD3HSwfmCztH975KTBtP17JrukXhp6VmvFLPWodnD",
  "key10": "3X6TNxrZyLdPJhGJdoXBQzZbWx7q3yx7c4LheoP45mVVvr6bEuA8xR4nCeb1FXJrEYxE21UA6JQcd8qCbnCfs3dE",
  "key11": "4SaAVVyGnrgCbTPxkJmhYE3fPEegoQrstxiHaTi9zoA9jk2f1aCPbhhuM5JE8y3MgAhiZRZjEb4ooLw2B18R8FpA",
  "key12": "5Dc6yfKBzt4toSEgHYisYpNmJFXr1mLsENNucLCW7SttcCczMNGN3hZJQjyLSt6uP866cm3G6KzHBzLoJ9ULcp62",
  "key13": "3NLLgmLMVKBCDkzLtwFaywY9RToamMtepUReZwYAKpxELb8kiQgS3UNud7kgXP286Q7hTmhEEm9Hd5Ni5boPCuL1",
  "key14": "2nCKA7az8PCSRmYZTfiHDY1EU1C1345QqcVn96mKdUgTHrjRVN4MrATGE5U8RjuGNis5S5TB1t8KaMzQcyrN7B8p",
  "key15": "23TbPPsa2ySpAmeX7iRid5y3rM9YRVAPwbN2zCcdhQxqk5kFVfgjqqA1Y7M2uGpPDTDP3ig6ZcRcCC8Cw5gejsXn",
  "key16": "5FMDvrBo3Mhy5W9UCKVm43tLb1sjStH1TGmxqZQNPQcwxe2sbH8oxFrC2JGrA5NMXuSsqyveWsJBQxoiKCbFK9Ks",
  "key17": "5avYTqaDxvZueA3uDf1UWCwf5S2BPJaFUWzPUMMSzLZFDLca2x2pEGezexN17FopZ4kxDVdZAXrpfhpqw8W33bXw",
  "key18": "4mJh3MReqH6Tx7DVWLF31uHygtTBA6jxz5tfRXzQs61dUaov2rqMDtkCKvAgyJ1hrvdSij9LV5ACMW5Gz4xJEZPM",
  "key19": "3tbbjTZWQJTXAd5KbFZ5ZsD5S6fmzUBvGs2cQbPL5FGwKZsqSgo5G8iPeiWYTptpyZ3W4cv5a2bRiqFsmxN9heaL",
  "key20": "4u7MCqx1QgiBsEbRoNDK2aQMgyirFyJPDmKjaz9v5KDtT6wTUamZNVeG1snCMbUtsue1KJZocPNuBDMHTLgrUT9C",
  "key21": "3K495GJprpDwzsn68K3dw3ZWk4oLx49RRFmYoy4X8zzUQZASH5pW24HVMgi2LXgMvMnNBfv4UKdyt9hMNPWo6NGR",
  "key22": "2bSAbouBQNWYrseVNRc5Hnafds8U3ESoNhVj9UKTKNrHvtVSCWYq18QRX7a8PvhtmYjWHDeiJB7szZbzNJpqAWNF",
  "key23": "5WCUY2y4GX4BXaZZA16Dd58amKqS2pgVdL3LQCGNDddvwvARkDkydrYVrnhM7e7MVbFsrgXVBweSefMZJGN1Uzym",
  "key24": "5PXucVEscup3VJK7KSNPgVBE2wpRFUUQwSfpffGSJRE3ctfX8yqxPFQXyocmxJ2v77DV6AU3bbTLC1TUNQGDr3vd",
  "key25": "5dCsrUiE9r39mX7HXwoQgzt5PMdad5uRQdjctcxkERt9hfQ4RB9B5q7DAF19d1CYr1NkKqUERuYeqeTN1wD6Nvp2",
  "key26": "5ZacWHbQGnJcLdhgkqE1abqGLjeh7juApEhjBdTVqWuPEd2LAjWjHvgM6Es2apqBWerJNf3tccdPW6sRC7AcwcbJ",
  "key27": "XDh7PrvTrhEbvnsUW4EjRckrjiV4YdRNMYF7zS8fPFzZkJ1deq2MMBhFm4ZfJ71E1CLcKgUxru2xWsiY34cKSPD",
  "key28": "b4sM8APuNhY3w3egfshwkqsiznDohzxZ35tvaZgiC8SH7gm1roZ1YyBJr8RbzubjLS6yLyB1JojaLa3QLEMpmJz",
  "key29": "4hD4Kc2s4Zrz2Kwv6u6cabdoiH4WWboSVj3bygQXjiMHDGHEMccMQnosSag9gxh62qjZHWEEjSoBKMZuTSa8K6oB"
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

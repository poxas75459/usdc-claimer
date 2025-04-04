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
    "3yhpnMZYhHGCkU94d4Y2PvGSeSkvREXuqCBUqZJ6ADW7jN1ah73JTo9R4CGgCCKcxmdDLbLBRceHw84hzv5TkvS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45QqQgp2AzzM8mRppavewAebqVPTmJTJBYwXgRfM3iGpSMUYf7Ar7WnrmytKXkWgwHhxi1W5fEf7Rkm72nXiScYG",
  "key1": "2CNhguzaW3JLrY7Q3XMAMfyHKjpmx7tkDHQBsAtfEVY8sEfRdxTthqp1X68AgnmFb7KC6DeZDvsrTrGc3BRxr3Z4",
  "key2": "Hk7cR7CvdgKHWovADFawBb7Y277nY1DKN2f1BGJPiUkAJWfCtGiLAGKyT17DyBi4RBazsLZz38BbAmRJrxTNg3E",
  "key3": "28UNRvfPEsR5qDHFwVBQu3LzrRuVWXKG78oyoCGR5XH5BWEUHeQ1PB9QmYy6fXCrxYkLJh3et6gdyiXf5hYLbmF8",
  "key4": "3HXPfAEYffh1pUG31PLCYkWnkxswFFrHLPQYxcjN2rt2qBYy6WFvaGYMFMpgSxL81Jc6XDFdXu2zHw12Wv5jUE95",
  "key5": "38w5dJeVcjzdG4dA9Tpza29xhGsYHovrrTgyW4s7W3zAbSd4UWVhq894XqX6n7LsY4pCssNy5bKg7i9yybS8nKkZ",
  "key6": "5cPehkdJvtGyi5R4L2XJ8RQvS2wiqr1ysZtpaV58z5BkfkVc49N1PMo8En5jb5nFLbGdALq7HXHfbqdn6xef8GLf",
  "key7": "64Mz9ZYJHfJgFSF1PMLfCXjgJxTsWUMSQZJYmg1rEuSby7D4KmpedxEnjZDPdDWB8mXGHUiytphYwuBke8qt386L",
  "key8": "5R91syUvsd4WDVj4iY57knLHRZKZzSJVqWbatUaervDskb59DiHYtUztf6Vkd21tUGnsM9tLVaBNhwb3hf3aUTPQ",
  "key9": "5MnBaqzsZcE1jS2gDCjkpx8bsfeg6Qcq4a1HH192cVx7BMAtTagYb3UMKmXfkp1752TZmpVWDjYEdVHGpcxPABZM",
  "key10": "4WRRrqyRmZf91CpFSZa57jQaCb7nTjbbRGQEis9DpWQynErSdRd1f3CnuNKyNRinf4Mh3Gi8yspoyfX35721kd3y",
  "key11": "3NnfSpQiT2y9X9dvpGgQEhKR4rCWgvyhTULdZ7thFtDejoAYFWAWCJFaKsuWUM8ApeSf6857UBU8H7dRW53s5oD1",
  "key12": "8LWZq8vCABa6a4qredmxifSZq7nAVhf7Kxp2sn2bm3grE7BGqjhPNpwdgoxNJQnbV6Qy6WunNx5EPyWWLPeAcxp",
  "key13": "4A88bwusdLsPptsQ7dpD1rPJzPzPfQYupMbDojRu2MpMyNz8MxusRG658L7aBCug65E69Zj3W2xNHQ3oMe6vTXME",
  "key14": "2V5qh1LfehXZujFvV3WcMh3zoNbcKvtc5cskT3e4SEr1qavucHT4SjBPn4pF2MgNQnoy2HVAEGPdBcfLdWwoi8gV",
  "key15": "4EUaeJtnXxcwNFe7VL2H823mfHSNXnPfDp5EZZPLaRxZp6bzFTiF8tXtP1D6s2a9gVfzTHFYYW7WwCP8tean6GiA",
  "key16": "223WCTzv7KaDGgBTL2ozr2PygC7K6Xxm5MNRbrQRjWCQs5UCtXE5kFGjFSoQ7g7gxuXK9KFjyrx5cyx8EC1eNajX",
  "key17": "5KJgHUgUvrnhYi3K56BX9TcU2GUb19SXc7nVwHQbmASSCJkvPyparhrdpRZrbxA6dDq7hhHKBhUYqRJMAG13fS8b",
  "key18": "4FdqrTx7hHUfoUHRrvT5DHtKnSj75NmguQ4ACdt1UCUcp1mYt6nPqAkLoPzeoDkCCK3hQqbHzXBLEo3ajVsZgzEy",
  "key19": "2UnwNLFi8fCfJAVhoiMGfLAT7WrboNC3K9d1y1EwbMVcjGMeWe5uAs8syGPBXWBLczP8b9qViX39mQ1x12ZrMzSr",
  "key20": "Fsyh1xMNxqQd1s7f8npArRm7X1nenpcaYi6AVERfAnCsGRxQMWYCiFUKAV7D2sgvVRhRb5FUPkBZrw9k3sUBeU6",
  "key21": "3T7kr5mGdPhdp1hxmCALBfYrDCMJXz1EpMCa6B33SNkrqt8PHZrmeJNb35xV3LdBxxLoCV7WRs5W9ZWFYdAkqJAG",
  "key22": "43mF3maVpTpN39YfSi6YtrfhnA49WzeW1N4AMDkEGUBq7D2ea6LAFb4VU5qY76RVxwawr21MTxQcgv74xS76xab6",
  "key23": "2wnXNNq4qyWG2KPfe1mSWwYYj6HGtdLzBAyiE6oLsfuTHsRbSvaHUMd1uA7YJNj5o1ipiSRNXwh76qyTz15NCx5C",
  "key24": "2VdXCQtXPSDDRTMxoeVqFXZHFgAgKD93gPQFaFLVeZZ2dniUemFKAwWgxeHgNHKXTqtKJ9bFCD5Ed6vCfndSy5B5",
  "key25": "UYwiofF5anSYWqVQfXTSbhqofZ2k2vuqc574U5hbRVvXKReRRExMy7SV5BMV2XoJfSP4tARVTGGzVp8qFbf86pa",
  "key26": "3FSnhgr8aBba5V7LqCUUfJFpo5EmfERwzPQGompkfzf6zv8ev2kaRn4gFzaZGhrrX4M6tUZjv1uSqxuCGBemvuGJ",
  "key27": "3gNaz3iNaPRaSrS7nFqttSQibY48e1vrmJiskqkwaVFVUKUDpyLzK7gfDq3ysU1kdC2NKQ4XD2diSLX2mKnsoXiw",
  "key28": "5NouTdyaUHkv1vFigb9bddNqQCmNn6FhqXBHJAK78DSv9Ycrcj3UPR3Dg2zMzi5K7z1wCNFCE1eGca2kymnMYwNH",
  "key29": "38J2MouDtw4FTiZDhhVEchSxCYsLFdFcKaroqBTcxuaC7xwDvz1Hi72TyauoyyG4FZmGzMKWhBVddE5mC5WWusuQ",
  "key30": "2ZyaLiKLgGNeWZBze6fVQfztfibsXzcVia4WYdutDPWHbBsM6AeqZpEkadiiMAboERzMFQDsUWfgd71dPMafcK9i",
  "key31": "4zbU69ctJHoE56hsKYkNFmitnSso6HLzakoYYnecrvwCFx1y96HeAd1MKQ9QKpjWffH8F1DcSRvRDRFvgAsUA74c",
  "key32": "3aiMFGJZhve1iQWPhXkZnuREEycF5LSX3dVEwAm75tMGPMDHTLCKSt4UotCfV1NXyti9DSqax8hb2Hsuwauh71p6",
  "key33": "5YY7qZz2f1gEMrEtcMJxYHCrbq7zGB5BoSUzCh2Tjxjxiki2VySZavazDohxpQFZPLmKjekBkVMnGvMP4nQ1Na1E",
  "key34": "3MDsBiV1oBwoidKdR23qNTrG4d3v15NCeHcVN4sgpmqKme37G4uDGPGm8u7Ji2xBuDa5Dvpci8Np9SQbDkm7Px18",
  "key35": "4emMQ4P1yTGVvzfa2uPL5nAHLLScamb4FaKhU5aua4Vgyny3aFuYNiRLgk3q67RsLtfwveKNqRo6JRRvF4pqN6j1",
  "key36": "3iKf8fbyPcvW3AN5oFsGk68kuU8UKhorv1y1EALfr8tVZ68v4uhdsNUS6MYyRpgeYeV93PiNdpQcA3Jg3pVG97EE",
  "key37": "RkrLb1iBwYC219uxsT4BP95yA4D852SCdFdrEF8yTUMg59Av6phw6pnvu4nVMyrHKM9sjMGpKFP3GortK6KBspn",
  "key38": "4jKo6qPjMUVYV6wNzkxAKBtTQDcUNP679PBksrSjnrf6WgkiDQqq5Hng9tc121M8ZBo1WuSeSqYRCU8LT2wDC87n",
  "key39": "38Rfy2WUXBd9qXxn8Tgrk1xe4UetL8gy9kkyJi13UKXHaYu6XnWVmmfY42kwS7f6FkZtoxmCwyCri3KXvyKrNuAT",
  "key40": "5QwGRwyY5ggdMQsWWMpS4WASAtWRbQZQEmiduMXKFwtyCcUoFaGYFiyTCMzn3Un3QMoorkh8ZnttZQqrenYS4zsq",
  "key41": "4dwWN4tN8R9o9ozxE7eTfTQdGABeabmtuybGutRib1kzK7J1yTL3KhJ4vWd8JZLg7zVfh2ehQBEtnDKzRBun3jhb",
  "key42": "5WXJtuFdMJR5eVoiHHUWmHwQbaNEYvNbrGkwMKu9xbgZa7J7HWAgdkthhTKt2Dc7bFqzXADvTwoco5vhiafodxw5",
  "key43": "2nmNvrWQYh3FU9VgbhYvuHoVrivpGpaE1TSmttXzExtKQ8TBNinFdGLE5vhdqjp6R8pY2sqJfVxB6Ay8q4DtkEPi",
  "key44": "4d3d38eEzb4SYU4dTcmSQhnWWWe1LSqUEjcCR7yktm4JCpAUR7hgdcDiuj4zmzoFeKJdhUUhyAm9ZmE4iw89wsnC",
  "key45": "2ukNNGCJsaKgQkSDZQtkC7KjPoxwyeve9C9hiJDT5e7Z3BkqKedKygV7XAbvPjWjMwgi6cQwjtNF77XELRfkUcPg",
  "key46": "4SmBhmxhQV3WruyaPjetT2DP6egQhocDRQrnxiSyTavMVb4QTnvGMDHnhqziFAuF8S1Q6QJL2qK8LZo5ittfHB7D"
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

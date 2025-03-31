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
    "MTUnAnxerqjHADudTFxTNCcD4txvYCYvJwSzoDuBtD8ubqQU2Aaou1fgm49VDRYVpTY6U4nvphQsQM36k4Z3iXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MwjmqkfP4NEUoHZeayrPU6adzbXLZrMv2wDHkkegtT22MzAt8sT9FJg5SjMPeY2TdZPFxkTUuYqUXXFBsENUHEg",
  "key1": "2YcisbWRZHAuRDTQSbxdbVoELeUfSGhXRJpHnyDUHxYhzwHKmrGC1n3hgmD5kbvd1DVtPLXoTUMrRtkQuaVamusr",
  "key2": "2Nhujb4mKbwtbLEe4noGgWzKDkGxubdvCW3jPoDQLKfCzXmvnMnPY7ntCp9HGcBiDNGm6SSHvGcabqqoV4dkYRF2",
  "key3": "5bFQRFxAkhA49H3YDMEXjeadxA8zhsx4gYctzYjqdVcqXb5VcpNApU3QXnba9BAdxgpLvFMvk8wWu8VrLzqn8d3k",
  "key4": "4wT3roBoKG2N4knnPnW8opKzDuX5a5hnxNoeK4uYuqPe47eFEfYZXhh2wSRbMG7bn2PPEf4BqtahStiVDtJ6efxb",
  "key5": "2uJk3suk3zr82S9k3uVdtSD5cDFVJiQetheevv33BLbzPHNkvACcnH4gpWwkM6UP8iEcFT4M1wsQ6VHuF22o2yVP",
  "key6": "3DTM2NAEPFjgC6C86ea7ZFJwDLKGpKBhHXRpTHmq3W6XD54a3QphoT1uzUpB9hZnTwhQTHpdLAmz7hDNbKsMdKDh",
  "key7": "4qenjX4REqQVsB2CwgKzm29Ffhe237GkbV9GHNE4BU1nZwwpdWr941jbhdetVzUikVYF4JVoixi29ZcfojSqaNE1",
  "key8": "4oTDMt8ds8w9HVnW3xJsAuExr1d27FuvL7X5ikUhoqVJB2Rr393RN3eARWSEvzasZm6rCUtZsxxgg4AnfxNP26BZ",
  "key9": "37MyRwPb9h3ZCTuBfkqzQiY1U3twxV3Zyw9n3bKAtEaFfiAMwkWRmu6JD8ocmjeDh8P21naoNx2MeNUesE9Xppi3",
  "key10": "2mr8jg3PiRe6gyK7hfyNtpyTVokGMW3vdc1dyJ4RfD26p9BmBkSZyXqaMNdfgzgPEqPPhGRqCEaGU6di5y4GXXfP",
  "key11": "5zE4deGBSpDKJP9QMMLTgiTszJpFPT4iRQrPNEraJtPQTtePXp1zSFr6PPnP21zoCBB1FFyzqYJTJeXWEXxZEfPP",
  "key12": "2h2k4fGa9VZYsWCoRmUEMVPTMzUuyUztLo5vycxe6wFxPMLdycfW4oHfoM3yfY8KNqHoQ1emfdNLfSihPYebvnm2",
  "key13": "ZzBHBQbzZXm8fxwLYWgCquEfQbUeD4CA1r4yLsyepm8ibMqqmM94AmNGvtJixGXSAZ8p2cKj1mXHkmLpt2GfvNv",
  "key14": "4fjBzam57bF24jqc4ffrfZy6BAgx4QkUTpV5o3aWN2PMJwv8yqz2iZRjq1ZKBXZ7TkJ1JMNFTBWyCv6JQyKffPuT",
  "key15": "47u5J8xGRwnHhuFTyYRoZc4BC7npfR6Ms1tNTRTnMrt5DSbbyyh8GRryhjis1N4c4dr51hMDg7U2Kv4seHJHG8vn",
  "key16": "572N3NVpqet2JwCuzEKcKxtbqGcmd3tgb18pwZRAHeKbBndNiSES2QBuUZKK48EDdXi1gZTuR8WWCHepwy1GqU3i",
  "key17": "CoY7e8pc9gBG7ehXU2bptzDfPEgBfarDQyu1TpKu8grYC2Ly8ZmH8BZSCbVLnARqUghYH1XJhXf4m2s2vtixw6k",
  "key18": "4U2hUMNFQ3aureTuvSZaGyofUgDfp2uHeEkdd1xzkqoeM7zfzoa9Axw3FfE89GN7VixemYYvnez97fWi68DqWrho",
  "key19": "4bqwTX4FU4wZEBUoreZZYS5dvU6p4BtxSq11pa258C4iY8MpMgAErcBbmnhpzKBXpRZ3PbF7o4q7gN8KrSwLJp9Q",
  "key20": "5sJ8fgdDSYpFQJ3J8xEbwfnFdsemmW21Yz4ZR4nwdfVCx15RSmqdqAgZQ7cbNwyRH94B6mEvxG9miQGDxGZeqheM",
  "key21": "4KbTGBjvLjQuW4EK3fH71DXZJTPdK7sfJUmHGGuikeUYbab7Qme3Eya9QZWyHKMFXa5i7JeeU8yvqUnbcfwv6tsX",
  "key22": "W4bsgBynpS2i5tyRvNehnQpvrJJwAzKeYcyHNMz13gXNPXqKAsrgAbHQvFojqzEZ9yEsdeC8RcuzXMvkgB36Lsu",
  "key23": "3JoNPHQiC5E9R6YMpHnVuSoUJwCLmsdyjaPW9vbD2SG6jK8eSYhkd9nf41J6vTrMVrCTy6GW7J5wH57WoiP81aWE",
  "key24": "54u3CFXrWrv6Xcpa6kww4guVk5boq6aake2DUsABBtqhwTcHY5equS4we663xkVYRg1cNDQsjpYigbqC4zpAhuBj",
  "key25": "45qFQ4pcQkS3bdv7v5CHjijg3zXS9bz77FPNXzPjhPPS9k7JVCfgHTNR2DmxhF6a9yud8511RFDzW7TS2F5dQZUs",
  "key26": "55DiL3BsWn1zoy6zaN2edPxzdVASfEUv8HAZr1LBHTZFBdHbipncCRoWfs49eBKu4X7dudHMPySkotq3C9jgzugJ",
  "key27": "iMGDE3fjizDTpT63FgmZvjKECooLtm2pW9VKSAAymdh7M5E8WbxDTtxXSYwXwHuZdfBVyNQXADRwj4zEsa8znGy",
  "key28": "2vzSVb4NzRCnUD3EgA6MeJKgysEgTN15z5mD7Cu3LiXBdVsRfF6udueJ1mStyvNr3aVK82snJpiFTpXoiePqfkby",
  "key29": "5bm2TcYs96iX57JDZBaShA1HFQ1w4Rn2W3j3t6ALo5W2PQzwrzLHfdzixBQxkNcEb1ANqmkLDktbKSGhipPr9Z5X",
  "key30": "5QarXaoYiXdf5MPB7Y5Q2CCVMuYg95cJpLJ31cb4pxTsxM8gXDMcWWfNZQu3opjU5QRyhCeSHeBAnCsKr7msVqP9",
  "key31": "5mKeyM6R3SSt1YA2ouHGcE2ZTJBHhPRoBh7wJA1uMiodScV8Qwi7BFpN5zwXd9TgB1bbMgxnczKpy648v3NzVF55",
  "key32": "29XKk9ys5UWF6cCfYMGDuzVHz6uSe4zZ9e9XtvQx6zZ7pFmTxufdpcNkTiANnuvMLqg1cHoHBZkaLsLj3V99ctzM",
  "key33": "WCyMqhYgRrzhVvz1eudm9vuK57xrzXruLMqJGHCJG48UFcq2m7yrAiENVdcpDMMRPAgF3a738AaVtAUBbybv7CP",
  "key34": "4uuFzfMYZZdPmEVtdYMwLAxoaJzBQiozqiTYpbi1fYXqC2p6HsUt47ACBZN5cUqcXqrLkXfuSYYK1mRzA3K81UX4",
  "key35": "5MFEmunTWfQ6tEdc1wQiB3ab842nrMZfmrYHmF8wEM1cFWGSu1SReELJcP21YDB4UqhQVPPWm8i9gSjGKTHvZNbm",
  "key36": "5nXaxUpGafUbfRdMeswUTwGrFN2RcKHiwE4c1K6dE22RyaoTFz8Rf3JL4qvHDAywMhGAFnvxL2Trzb9NxFQnTNfj",
  "key37": "rtTf8H7197kmQGU4JKuDPmiSMjARk1frrxYHzRu7P1aKWZkap788yunccxcyyouUZEbSrg9dJcwGb2RG2PRV146",
  "key38": "3o96K1dzBXqTQbwctjNkxVicMDKSbRgydBThcfRJ4xzVrD3b7w2c2Wf3mJufU8LeZvGSLekgeqo1vTr13hvqU6sq",
  "key39": "4BX46vvu1yQHNH3wPNQz4dmgJ1Jye8kScsMYZyHnpgWzyP7Ko8ktNWaVweKws1irTioRWys2D2N3pKYyv1Zxkw8k"
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

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
    "xxdfXkL3WBthThbksSpi4AWDztm6emH6yrKdD6CjVCBiAiNs6rMEbj8DB2xubkpc7gj361BQ8YrUweddV2wWesu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V2hjGq7QAipgNipEnHWuMrsN2dXjHdTqS89su3BNnczgevbZW1qP2mZGqdgVJoWbT2Vq8ACbTUEyudrwz1HcnFa",
  "key1": "26NeJVMMCczFu8AvvszkHRniib9hwz4qGV7BXi7Vi9TSS3oCLuxYmrDTWGmZhBA8PLTgnoMWE2qhL4TvKFTrvKjK",
  "key2": "fbzAw2sji2bC6Tj9hN347pqYyXEijZJ3TrTobjymJD858QAdSJRUbUuVFWGPy4aj3hLEP9g9pZpJrvVdfhX5g4F",
  "key3": "5GzWuf2YSvth1pSGhQxCKDFBi8Lp6EExmtsLbHAoj5Kujpun8vDFSbPsbPEa6z2GfttVMwjmo6RSRv9dD2apSNq6",
  "key4": "3gLDXURDvkbkrHLRKhxBDoFfMgvw9MyCyw7ZmCnJf56499gmXP7owBbqYBEodzvGjLzu4BKNQvefwqfDYNw8WEkY",
  "key5": "qUmoHCfmM1rxny8ShreU93uEwRneBeoFDRuH3mZcg8pL9jJasfebRYHFdo8wguh2Ao6k1kdWRUCfEfhuDqGjXxJ",
  "key6": "2c2YCRyGixqzhb5z8P5Ln2MgDMA9RpcX75uxja1tkcaE3ke9iXT8eAHzK65aLupTrBn9Exgbs5wB58VADCwtbDX5",
  "key7": "2WTeuzkuP3BK4yDj9YNVcp4j9Cdh1CHwtQyZPXrp1UdYchQcPMPGyGhiWSQ7gLvaQ5fWAuJPBc8iT6VDYfuJJybH",
  "key8": "2UJCo29shVBzPNqaK1k9owsWuk5a8UWRj96c5curnz6gnuzmS7queAVvbGpuEToQ5HNnjqsUTZvYwumkWcrrZNZS",
  "key9": "2wwLLTNMHDWBJPhkK25Nu1928ksyCMgfytQGr8hFGHE1QmFP65wy5KVkXcvaSqddPrEc9yjUw6mJFP8xykadrcT3",
  "key10": "oSXWkHzaDgSGoKKYKe4GFpkyNef1bCYBgtvjt96nu87f6JorumqjvLtooLhE2Giguf3CRcJvQeAuwRjEfoKZbdu",
  "key11": "3F4SjWFn6NsXgZr5xBiUojaL7DakXmepUErKbkxThssENy8mx5zgj7JhLBfi14wgPj4csMi5XhnZ3vJ4rK5PuF7a",
  "key12": "26Hf7hJHvNLrxcrCwHsSK7FrtWL7sLu4DkKHuSFskYRSnEbjNhrFZYBPhWxd6t7v5AtFZT8JyoeZJkXAfgnFAppu",
  "key13": "5UuF95g8rWCSYA8TFmfy74XiFm8vufE28HaurNKHQpkEskr8wT7bSsMAJphyCAGi2Cr4F7Q1B8b6smoutfnKi8Ww",
  "key14": "xTAaxJEcXtvJsjPxAWNREBd7i3f2bTa7akrLCrVeWHQ2B1HQuqWFVKHATctREYJPSmefubLx97JVG6eeKvvKEhd",
  "key15": "3fYh9keE4WUKZRLHYziW4DuWAbpSX2W48jC7tcXumxGWaJykXUXEnE6pJyZEiFQ1e6ng4EioEygQxzfuWYhQVSPc",
  "key16": "59bqPY7ggR6WRLvMiZ3HYPmtvv5HjuULRkVfinqitsCcw7BdVUaVKXsUSkeNZh9vav6Jtwc8yxxjbLA7bqRCusYQ",
  "key17": "5LyRgaTSDk6RjZzpR8ge7uNmYwNCPR2dxK6g1rs7evG3n4iBN1RnniA5FxTKzj9HiQDq6mPudxLFS2vVdbte9LJN",
  "key18": "3wuovDHwJDRkNo2jAHUsYtckKPV6fG9vqajg4xmZid7kn32PyJ8fm2w61SMzDuvbcJiscMHP2ipD2bCvr3R59zks",
  "key19": "3ZWikoXRHSfEkeA1EBL7HySS7yReyxVUcZWaVSA21JqHGgUeCLv6PnqpQ4fD2CXYju1YCbxLF2QmAHLwioQ2AAt7",
  "key20": "fseRD2UcMBDVGGptZEuvVgdsWczqkdfLGyWXXF9vSxAtq182Kdp2FVTFQNzqUEonqaxTVsj1Q54SavEBszzJqoY",
  "key21": "2vFnmSd1ipPmkzLy1qEwLw5ZePGpfSU7UHSYapvqGJvvbKw73U4hnyGUZ7DYW8wiYEHhb3ZVso2xcxU2G6gdP8Eq",
  "key22": "2Ki2HPVkuCpxHpCn4ipsRXLAsEwZJaPqHVKjhS7xFym4jj9ZNzybmEd7QqVU2oPEPdTbxN9UL4sK1iMer7ZrxbPe",
  "key23": "4hzbwBdzBHjSveRqvuhN6pba1BqDDusnFf16GqEcqg5NsmkTB9XvEYDQBLWUaSnnsP2b27xu3WTX4NXALmFXZB5Q",
  "key24": "3mREhEsvuByo9XisVhFEoHEavTZ7G2itutgYraoDbrKpkK8rqcgPNGeVuYcgRN7G6jqhLTMBA12nJVSkXvKMQK1Q",
  "key25": "3VeDSiyP6JTmUF5nWeebaRcW63x6tXpANXkUo2XJs3b44unaSmkuxMmJhSq2p6Sjare5knndpcbwTpaz8idptQvu",
  "key26": "56xhnXRACRoTAmA4DqGaMoA2PJojh3rwge47NMriKdmLAysxnHJTGckugdSYEbhULas4UEMhYroLt7JNdKfuQMML",
  "key27": "5dKz1nk1ZA7ePxv9bFF6cYshkZFusNG9mBt3SHumRb7F6rFqcwC1pPp65xwfZEHQR1T2xMmPtnqtrJJDCohbaVQN",
  "key28": "2EAszk7coG2jzD3go3ouWU672BxzNQqrBjdDZeWjHF4Grxfw7sR3pMdHaFjBWMDmcCUX44nYeCwacFv5Ujt7VajN",
  "key29": "3HvMRSdqbsCgYYQroKPfT96zbJTKmgzbmwLvYmRQsSQu3mpJMRTNTGZWkZuFRZ6ymRF1BJdUvhmKvFX9RhyB2bic",
  "key30": "2R4H7iUj6q12u2EuvCwL7VWdvipZJ2MfsFW21X3iyHoAjaruSfzxqXhQBmZV35d2esjTq9i5WZqBXTnauJzknXmC",
  "key31": "4b4DceyDE1HTc8SvmAmRhc7G6zLMeLQQGwczkTs2XXenTgLaYdhD46EQ9H9rZZ15GrAPsSmYQi6mF6Vx5e1dUG75",
  "key32": "5KurZqcrEHAYbVLRSWH6Nh7twjAgpCCtzkXeybgty4Qx8iikKZuVcki3sMRDA22zbmoArhhko1bhpXiyQU9GeyWx",
  "key33": "4jixqFtrEEhLb6zJqAtJF3tTAbDFZJyCgEU6TSCCx1wDje3bhPYemt5kjW9GmKH8CdC4R52TMoWS8uJrLCukRAFo",
  "key34": "Exxaz3Ct1HLbW97yei4MK3L5WC1CE1yPqedvKwNhUM4SEPzpzEdtZmYV9opPhZUDKh1Arfz2mRixWGxiEptLjBF",
  "key35": "5VqJw6ZgqHLK9TCcjhJW785bX85E33c4bydRr6dMqKSyJN3yByHZoGZkzqchuoe1XGa2vyqahLCpfUbyhs4kR2Wa",
  "key36": "2LMwaVDNMNntdinKa3fyhg1GZ6ZPryU9GbF3EApEyJKE4hWUhcs1pdsg6tPVryaz5BJcj95HkXYeFHep7jbCYj39",
  "key37": "31qT4M6yE4z19Hag4YMM5kJ9j1gyCAjUXULLYd3tmYZiXpp3Y6VGRp8nkGherusNjJGjy2FHEnvbew9XFpwBRFbX"
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

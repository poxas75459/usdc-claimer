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
    "5roPRbPZjTPDGkBH7fxuKrBpn9mrGpU7tY1dyuW4L6SAb57FyJgVwozTs32VfaVo1d9DsPdvWyWe3auhn9McKuJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tHN9naGANtT1Ey8mHauQiRGUs7mht4n4ozcTZ3cB1YpFRReBSMFHR5jD63iTqZcR727B4GngMG5TYSf29NwZS3i",
  "key1": "3XBa8V5RXSpX724Ahi7BHkV6QhoEnfVJqsxKrfkSJoAzheCptiABB5FE7jdu9RsGUJeF4Ct9KhqQCkFRwdLPzHDP",
  "key2": "48oZKvDierttDUH5egBKx9dRvQAD1v64DLnxnLpUPSSwAQ86i4XGhEUSiKLpzVD7Mi3KWYRF5ePSSbfNywRupRAn",
  "key3": "4xLbcFgZVsgR9iyXyk2GLhbU3wSgckEGERWoDiGaGp1t6qY1BggoxBoFJzp1yBLpcvgRBxkcH6pJVLywiKwmHa1F",
  "key4": "4DvtJ4AeFwycRACTHsXZW4QBHXEA7yfxeFEzfNSsv3BbfdysR8CdrT3XEZ3H6toksuANgoBtW26F3SkhmhNFXnBk",
  "key5": "34C1KpS7pis5QwADNgNS47kUfwW1o5F7fieATDe81CvF2HbKemPJyGEt9t9gv93ee1C3c4tHwHiiCifcaevokASs",
  "key6": "nSiubevgpd4X564VMLNaSUpn1BcgEkkC34PU4BH2ge3Zcc2cjQMn8NFgfuWhPqwaWpjKTUviHFrrZztU5S13ne8",
  "key7": "39iLARL5wjP93iZj8B3HDF7bBHPv3QCnjpib5pxTwtDqgZrKiDwWEnZ1Dkbz34JpKNT9xKPHUGNNGBr4gMdAivMi",
  "key8": "26YXerxAA39fNaoXexP4C1yXjF9LqogmTxgUyr3Sb83BZgn8HDGe4THDPkb5fhnmCwobmH2F8H5FFEFZ4ZfAwBog",
  "key9": "4XKmV6irnbsxKi5cRnt1CP4TeJd2wAw8XbNDfX8d4DWVBJMC1An4VKvyhV4TKKCwJq9fTeqyjZVp3UTCxaWikLys",
  "key10": "4GbXnvqtKHNgGtuJ6e9YFqq9QGycQXFxtvkcmFhyQnrPiGM9mFs7Uw1pXHcHQ7zQdxrxLsV5ZZLXXU3W5MWq3PAW",
  "key11": "29kuiV1sSkpAURovSk1KatRC7MfxpWPBu6agk354oqRq9rrKXhWugaozeqZvN7pMfWj6yu15jKogAPd8pryMJ1R8",
  "key12": "3KXk2P2EXFxVaEfd9GmWjc1tz8e2g5D88prmMD8qvfpyA39f7Qw4U3HwAJCuvu7Zu1GhThALR1t9x235BgN39B8r",
  "key13": "5FC84MGQdXiqmhzAFRu35k66nfeHiUVEJrrLrVqzqrU2r4mVcGZFxADxk63xAHzohPmoszvMF6TJpj6HN3156JQC",
  "key14": "33qrCSjRA2nj5HWiah3Fcrnt8SQR2AMxxbicSUdPC8tK5wDjXuf4wyzinRZSeaXuT41kUPBohBqjfo2sw7m3HUvt",
  "key15": "J7u2io4oEoU98fLn1dfwMi7wot4g3jdvPChP1KdPQj9UKynmpSnjf7B1xZDkQ8TYjccWyJ1tDZHNsgzX5HUqVqb",
  "key16": "2yfpHaTkPF96fuk2hXKX17PRJnqU4KVfrQPTLM7iBARfoJPCPB5L95yGAAL5bEy9v95rpsP4P4ECFJJWmpwv5T1D",
  "key17": "kaTuG7k8NmKq4dwufm7MywVjcir4jCkeBpUR16vw7e1dpkvczzZm5qyHFxzi9esBXBKY2av3dWFGULpXzm3nRFm",
  "key18": "Yy8DYby4Vs9JrZ9uoE8hBVRCJQSsEdo337imFJGfY71RPYVxUSKG7spcVAoeAQBfpwKgRq1WdhAV5vXkexWSfFF",
  "key19": "upwNqD7rrvWaRa7Q6yVt124PZzySa2GRpYB5TAjWynzzCN51YLxj2XercZoaUdJUTcyarYBuYGuCHSjj6d75SXj",
  "key20": "4AE9itznstofFi3RKwf5yQyBybc9qAFtHLnY1KUMiv8AdDSFA6rec3d399YJWg444jdotfrJvEWScvReprZQnnnL",
  "key21": "3JKhZvKg6LXnKcwCHkbzEUC87VgWVMd1pmNJYxUrLdqKXot7osAgRmUu3a9RN5rPZ4RR2m6AhvHFzjhCjfe8Ruy6",
  "key22": "5h8PoqrDHQMj3gEteyrHbpxbchrY6JBX4kqjqisCY3SicnSXyY8onWegYTHXx3dvp29mrXt6A9x1U8Fou24bVrpd",
  "key23": "3pkAPLUPdgp7Jdv22RXsBmpMC4CzNo2fBXqHcEXCxbY1ziDUerKz2FQDZZLxV2dUPeJKWQnVBNNjp4cEBn4BL4SP",
  "key24": "5VEf2k5e4z88zJjBerBGpn28Dmbac5C6nRoRdp1xGW3eioN5eTUuqYKnuxpFzrKLYsiv2ioscL7oc46DDweYJKTB",
  "key25": "3WuNZVVmdBtLmnF2J24A7XL7JTZAWQNJ6PocahFiTcyzGtrhcvDzESXxNxWHwuuZxtCwWuXvSmtR1Vcb23GuSTbP",
  "key26": "3MCzQS4bcKQvEaHCwYhRu4hU58du92SEJBan8zjs2cXErY3qtyJ41jbtMvQz8f1Nuv17Zx5sjMN9bidSjM9oLeaE",
  "key27": "54KuyPdeyf3FobkdUkpQniRtcWSvekBe16QALFjaoavYCe2PZQQyyL3LLRoCGi6aUHwK6Fi9VJYerMBi3RCnwKer",
  "key28": "xHsHwu7nuS3PeFr8EdMUDrJv2ymmWMpqxGvR5w8AQxBpcEwAS99FjZpmJ68rbxHuPGdmisEQCYa9u9Z2YLZdMEq",
  "key29": "5j1Dh1PKATkDTk9yAd9Vs4dN75cofj2Vf8EgsXHcGE6UES49Be77NGGkxbKQ3DtT4kkWi2peiDKPkemcxq7TQJKx",
  "key30": "29PkJa1tpgb1d1Vc6qw4Ccw5jygueB1ihrudhiXiVwmcWWJJwrtHvnJECbCgekY5hK7eUbqzytD2i39hGxCM4jL5",
  "key31": "213qUkfoCyn3uD7e3C7kvtXdkSrNLKpfKQp9BKVdWmsqgybjFVawLcN91jM6w3Jxjm47RDHesBxDrsbMTbbAdN3P",
  "key32": "5KyfW72Wk5pJM6uTaBszgpukyuxBUePWyMd34JxWDLhrc38kW9T1DFRbgaQofTsKEfVLwHx4SW84MafJcLckPeL5",
  "key33": "3sw9mAg9TmkNRy2desGQ1GNm6NkS9LM6wEFSxyyTCsbBgR6v7MsB5o7GyJW5929vxr3wMBrds3Vdw6pW53MFKowz",
  "key34": "21QBd97WVy9AJEajxaeTeSgfNYshu62XUp2Aferv6VZ7By9oxsf5VZAqqncwBPvHiihq2V1wyKjX28441Xe1LhKX",
  "key35": "5VSyTnURWPwXvoQFsAPepXMzWXx9L2PLiKyELLNGY7vQDaaMtH5zfeBerbL9n2wdX26F4DLXnhC2D6NWLNi6Vu2j",
  "key36": "5Q9CXFyVG5V2mvyDEnnEK3GiMc9qHtsHVKBVKwX77BtpEurb49NCp87uCM4f6ixhG4oHU4PdyWDj4XdRxBoABzmg",
  "key37": "4ndkCJDRqFEguWGme3unciNLUZSQ2g5M1JMHeYA4KhmJhALx24ueFaZ2nMKT6xPzW86QrtkoVopcAvyeXFLBN9Vk",
  "key38": "5KfNQHs1yfNQmGvEnrDKSF29bE4Fz2SBZGk3CMPUcXK2LVXK3M3ZP7JKMDAGbzd37urkVuAuSvoQntK542S7iXeT",
  "key39": "vZBEQDh7oN5HD1zzVjZ7tY3LVM3ahr9sxD4t155f8HTQpJnQhwMV1pKs5L17uHDiqcjJpC671xFHn15hmcU6Hc4",
  "key40": "49fzH8yPuWcyooMvVnFLBziPwvakYmtskk8525MzEpJzpbYyNKCZ2H9dE5pjbDvSKK1pUXjN15am7vdwfbDhkZKW",
  "key41": "4xc964AR1HCU7TjeLDne7nu8CXSyrYcL3pkVkVm6HwcizmbfvAsGBHQLwXSviFfzCfiVABboEAWPxqUxppXE9fg6",
  "key42": "4cD6y6AqTchDBETKMU89S8pqBjLD5BqtdT8eHy7ehGdtm5bh7sK7kScHS4EhuJY88J4ermDdKybh7iKpVdeh9gAw",
  "key43": "3xwR4xm4AwVYJVvYuvibeLZAdTWSuofs2a8uwA72CkDxeuD42QRYUHvBfWrBk3cNWhdQkEM1Tci3jb2gZmS1mr7a",
  "key44": "53Dur9mRvSH1ypcZeeyJtaBpAeskREfAVevoxu9pfuZcYqo3Y34SJAB3nt2kxF2VWXck13oiVq5egsHgfe63gN9b",
  "key45": "45g365ApgVkyYvbj1coZb3VUiMQ1uPEQ3tub7cp5LhQJgonPiNzHwDcYCSPs9BDc5HkveS7m3gcp4twavAHdCFSb"
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

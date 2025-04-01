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
    "5nMBJhLJTGbEuu1oNSQzRHoZuR8gzw2wx87LEZmUuRYVnWDmV1j8vyj68cafwRemD9uoouigKjSMnmq78Cx618vE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nYeTw3sbLLaMWAGfi6begKHowtwfsHWfSnqW2oCzx4zEagjMrpKyVPymoV7PvXeP6SCn1P5aks9FEwXa6QZ8Nsy",
  "key1": "4XqG29XvxUsbshUjiakJQEb5azAnCcqkXnEoUobybzXQT7oLQoyV3VbLebFLFwEE94kBPE2NVGTjV7eUjeZpu34X",
  "key2": "2nmFSvn9ybpfjPeLzJriUt1suC9wF1AWSaNu3W8XSLf98ZuBpWTVYGrd5tcweZXVdUQQVC1WocVK1WMpuvE2GJHq",
  "key3": "4mJaLCfjVKut9QWJnsLNeorgaNZXQybncbJZnrjhbi2zXFwT99Zg1okj4wat5RUBS7NESZqxLZEsRG7c6Xhmf2RM",
  "key4": "3CgjF77aEChrA2rGgwYEzSoTHhVS6Hp1vDP8mboiS17tqKnTH3oeTq4dMBnr1vqwKRtAxtE1KqmY6GakqNjG5Gv4",
  "key5": "5SQfwQvD3TRDru4cuVdaBt4Atr8XGywcTeuas2G3Gg1iU17bQNixQJUGoGqiysfqCtH5PnvzjKJgfoGhXThbySx7",
  "key6": "3Zg2AqbeULQH2aG54RLzwnFWkhwxqgZyue353uas1Qwt5f2VTVrQC9Gd6wopC2TK2SXvZoQ7qtJG9Bd5uATaXVq",
  "key7": "5sxJ4H2UcmuxCxTudS1auFHNbV7yuCegFJGQwNWK6kwjABk8GYFid3cVD3MXZaFoWcMyNZSTMVuyoA7YiKtLJFL1",
  "key8": "553gYnmSVscPBbEVDBW1jt9HCewi58eB831KAMHSfp2FH2kwddDG8TemspawYubVsTQWVwm5x5oSrLvSsu4pYLFr",
  "key9": "53Z2ssSjUTqt6cbAStADRHtkuTZxdAgZKshD3DMSRMAdMTEpMCW2RWM4R547BPibtjwohayKz22nLFncf8sHCizL",
  "key10": "9BybRJHsHgGS4cugSTK3yEd4ysWQtsGJK92PWGnYLz3c27kazA9z8aGYKKoYTX5C1Fum9LHMvoQaiRrEYpa59vg",
  "key11": "59oTMnysSTDKBqm7VPfsStacehLdmf1YpJGCskfrxtyaQ8G8JPCouXSHNdcRMPAK2XsNgdbc3GaypMp312bgdFhs",
  "key12": "4aqAzBRBVh3PC9ga1LgLFBZTsvFFKDcUPZqancDFKMAnoKbtBhKb7VqKAGDWAjW15KizZDvY4MMTYn8tDiMynv49",
  "key13": "2SxefqSvyHP1yzjN9ZcAWJ8GRwCk729LsVNWGM94wtwjh7okzmh7rebGjnc3teBW9gA6iKciyQTmTxkmMZd4Dqh4",
  "key14": "qMQdKtuF4TLRYAUzhwCdupKqRhDFgtjpU58itpQqf9zCsUMAx7epAZ8e54voRpALd3cuTRxvUFPCsbgzNz4oGXf",
  "key15": "4LESrJrhXV2pkBPh5Fgwhhbg7kFbzpMD6ALiUvKd1LLgQ4o9wsn8AFPc49YXALpXN7YgywyzyqJz9fFuC8gmjQHc",
  "key16": "5c1sXK6JjCCKw7cGH5C7brNrSJ4EpbXKc5NF5WLk2HCCrBdFDqQXYzbimZEjbXuGq1HTuTCJnU3JcqoshJBYSqrT",
  "key17": "3RYjpzJmgxxuCBUfEhYcK5dtSx51nxjoMY2jckxCt63zg6tWjtWNhchK6pW8xsj5qiyxeDvXgEueziH3enG9VPPt",
  "key18": "2ydpthwrFX1tqCjeUxzN1qdXVrffcqzDAdLRA4oYUwypEtax91UG9fapQBD2c8qurDkzkgPF9hN5rFcK7smCHfjR",
  "key19": "4K8F8Er85pGZd1nwMNv2wuvR1nnnnwdF87L59nmUdEaeHe6HXbFZ5WCP8YuTFLSgrGHbvKuNH62PmW3vL3bYv8Xw",
  "key20": "3FZWayDjr9f7TNn5trGnemKPoX33hNCAWr2SfNNMnfEmAbB1UGtgJD6rWNB8n8ng2KEJGjaPzpFUbAzXBhUor3eC",
  "key21": "JU6MqccAN1epMAVB56YWRpEsuBs8QNypzroYZh38GM3ya4e2AFWzm1tfyJ5pjGDPDRvpggePjcP3ZEHoB2Ncxmr",
  "key22": "5VUarLd3LNSMdX2z6bCsWfy75A6hCVD2YyFWckmqtgStBuukS5GPE1iXq6fmpG9SLXjCpSABAyYM6scLxVxEsQqS",
  "key23": "2BVg3WpwnAWYpvwgxWFPPcRK23CtJD9frR6PLiKdE85K7zjshmGSSsopzBhX7P6TmfsUktPpWBm5U8rG4tfdcviA",
  "key24": "3LfqZkqEHL1c2dWCe5LpBp5XrvJC1jSyTawreBreJaugfhFWaqWTgmhigP2Bc2gUL3C3o5Lr8Ftqj9UknwHQAc7D",
  "key25": "2HPsNj9vShXUsGgCSNHP1JmghF1gXbh8QbHe7U2bbFye2A8fhbuMXTVCR5LejAv9kcVgJUuURNdsVvt42vaNHF81",
  "key26": "3t4DpG5L6RZVhDdGt7SA83K3D7DdD1HbMUpuCWX4ZhFeKtCLxmY58YwGecaamAocQAYCub7yTLkyVo8qsog4vXwY",
  "key27": "2iBPcyMmZDFc58oqMa23vx5GvrVvh6TkgBx1S8fsfc8mW7CTY3tKSpBeonJbtfSfo1WWKym5XqGVF1QezqeA6owd",
  "key28": "4izUjDCY7d4YGGrNReNCUx69rCWDaYPcMy31kHiojLaZ9d7JF1Z3MBYUj6p4c3Edx9935342NYMum7etgn2yFqMF",
  "key29": "5N7QMF9TS7eTGc9cjdpeNwiNfv68UhY2MLWThKSaseqpYJctgPHTU2mb6oHcaA1znpzHz1h8GTrHAph14eK8ugg8",
  "key30": "4iyF8TnLNG9Kz8jyPvhsU9Nr7RRLuq5Z9V72ohfz9JZhXkZXmYLQzYuPacynUpix1KEEsAF4aPEr1LEa1NLwAj5e",
  "key31": "5Hyhuxh5dnqxeXcEkPWqGAT2CqngxUjS3HbNn9ZEZR7DrFCCYqfwhMzW32wxfrEY9HKAVwu2Ubdf3xKdAbRt1FVk",
  "key32": "5CsQWfftr5LoGcvuDxmDGzdvXNxkDwkdt7mcUzCEWEA9MCf4B3VD8ZkejXT2oKkGzNsParsfb5ptP3AAYPWmUeGa",
  "key33": "5Z6Yjnd8jGwRs96C7EyXReZ43gmZGodjitcnPag5h43cnsqnuqJEq1KpyCZd4ZEniVP4x9EoioQ3hVGdbPmuQ5Ka",
  "key34": "XQ25pRTb83M8EF6T6msSxCxW63YaFsBuZYxn12ZXuavSHYax72TuPyzKhdMosserXSDd2P1VHBLCJmXhNS8Thqm",
  "key35": "41JAX47pvi4odfi5d5izeUNYXD9rYEXmBmtNm1AD5JUesFTFhW6YVuy1EhqaD3h2VB9tBwiG2ivQtCvYxdFRJ8Kx",
  "key36": "4c5L7BM1XgeTnGZ5hXUmFzTtwr4amgrm2fWnD8wSRGBbGLM7rWkBiQQd6C56tNHe37GPcsLXxUuJFee82NUDV1R5",
  "key37": "5woobDWGSDrfJ7zF1Rt8NMpkc161fJ9koYVzZMLAJKeNVgrC7Rtx9ScjL3r6oHvmVXfoVEk3Yh8w1YAxGvUwrBJ8"
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

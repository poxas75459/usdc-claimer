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
    "52YozAb22uEMdyWzAKCSEAZ7iSXmtyy2U8d2BMtvhpRksD3Xr13KrBkqgmxqRFvFrhRqa8huqgeCHWixcD4nueD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cY4gHFiyBoh8F7CXf5BJmQ53XwMpvApEj4cgsjcYVR8WDAhpFnpwE6pBSKBh89GudyL6eixvuHuSt3TCk5gzHU4",
  "key1": "2JsMd7uSv7vbaHnh3FTDpAoc8DYCKyS1NLByAHQmYEGtMHSrSJaHNs3PoM8Xz1nR8j6m45gGkGa26eSiy74L7GD8",
  "key2": "26TQXPL6at6p48Jwhfve5w6oddZwpEmCU31Ts5iEDwVSwzzwdreZyXi187WnDHZWbcscPA6i6sKQn4FCbQCL8dYJ",
  "key3": "5QuqPsYKDz8UgwFDEyQnmx1MMucss23Cjnrg15saghKFWY5BmHvA9JHK4ExqT9FiXbhZx29bgj5FJNFG78oNvWDF",
  "key4": "5dPnXfRgjN75oF8RvuEtg2BzzzyTAPvyMBxtzjvhca4PifUzxoU4EvPb1gsMgULq5kb39JfyxC5e51Mvw5gnGLxn",
  "key5": "wgnN71viNtyHLs7HGajEmpJ2kYF5U6NcVtMggij2y6E2t3uVZeanxka2fcvGbdWsqwds3sw2ZbjZPUyhL9peaDo",
  "key6": "RxoShT2tQBmB8pGc2p4s9r5TA8K8EpLH13MESXsmHUEo6es9PowdwBuih85FcbkacQ3NZTf5YVrUTTtoRrehDTs",
  "key7": "CNPm8ZJsnwdJ7Z3vNNV1gGDJwo2n2CqxsSrxGVmf5FusVYd4CJhURqHvAuGqTP5ssN1fik6PDGup1gjbNv4BQvd",
  "key8": "4v8gmawRaXgAYLmb7Acn56YfdRnVv3FVwp9vvU4RhFd9XMwoCVXsMrqKRZdPcFw1RGpB6xjWFRXGmSQB1vFjky2y",
  "key9": "2i6XvMfvo2D3E7jiby6xrL9gvnCwMYNLh3nxmwuXgSAVxdQoJD23PfwQhR4pNxVYCLDCzy5HMp4JuHiahjXAtqze",
  "key10": "55LB43Z599YwbUJYPHxweeoD2nNjKkduau8zKE4C7V4v2u81v6nf9aRTA5fmPqZrD6X1BXorFpj27azXXhuYrBqt",
  "key11": "4PVyptzvnd4d9sPtnaJVzVFduy6926CodNGazCqnBfCj71E7PrgwoxcQhdGcMeSSP1LM7a1aikUFoNSqkQt434HY",
  "key12": "289ZAyDuhqJXc7jitnRR9LX5h1r8XLFyYiMoXcoizszSVqPQxVCBgfqF4ETVAvbBFagDTXswWhNcQCir7Vi5J8cM",
  "key13": "3f6KddeZCDgh2Tp4oPu7w3gmPhptScRxpsbbisZtFzR6oXGKmnHHUtLPGsFhA6TPaRFtbJyiLsEFuFQiyqHhAuW2",
  "key14": "2qp4iMf69C8NdsQro96Xe1Um763j8FsKTKxPCvoJBaFgXji4FMAjUR19ZLWSbyCZfgM8pDrLVwiMK4Y1n9BKM1Mu",
  "key15": "iwJLUvRyfac1BtVWYBTsCrGg8fjtiicFxZQsBhRsTnauzqzbsNAnSYAtHngqB6uYsBaMpvvoro1rtEKe79MeYdt",
  "key16": "9JTGcrJKEK4DHHFvYqP6B5bsQtruxRFHnfAPMVhvLaBdmP9bcVSGT3X9ubiqdNNp46gBWwvudtkVwCWGmUmZ5sX",
  "key17": "2xcBsqLYwCiQiZ72kZwauuCkxB4iPvNxT3hZ5RJeA7NRJQnqUoi72QeWgT2kMubN8QNVaV6uubDS7RGvXkeKnjQ6",
  "key18": "4xnRgm9Lmvdzs6TviNTZGZ8KgRc2mfNJyv11bSMBXMtqGDGHffSN8Z71dCYDQhdEGP4U3iNSULWsHSrBeFit1pUq",
  "key19": "47JFsR3d9qrBcZW2YEwM9UED5idDJJukkWcCC3Kh3JtoqNa1y7TRm2DLqdCVv8b6zG1a6GiXi5HR1twctkRZsDLB",
  "key20": "3uvZLfbfksmpFUPGcqqbyJE4FBieVpE8FXNdy6w7XoPT3kQbdaTKK4ccFmPf4VXAcZuAXS5u5rFg5Bo7mtHsKNeC",
  "key21": "qXwv5DUuzt1K9rBsZkEJYewjakVKAfyBT9vHjC3QQqJYyi8h5iT8XXQhFdoZLbyJaUinArJaPcePrME74yarZTt",
  "key22": "49n7QcWR4W6PswThh7ZBaAsY6F4RD5GzZgUFovsSAh8UxwAV8jJQK3z3VmoGy3ufmrgTy2u71G6fuKDmkfZG78Tc",
  "key23": "3vbovxxpReXQQWAtwMrdtbNYYUZxfb4QDPAq78SxG5PRomDZVHBz9XbWv8Wm9dFWEwChF7NRVfP5KuPYd6pwmSFn",
  "key24": "3qB3cw7VgVcNbUxBqCkDbegMuhvbQHmahEhRtvxKwDVyxE8sU1r6hy5enqi5E2pCFSFwf5JLzdSS93BrKDXXDE5m",
  "key25": "49yAVDZgS3dzjyecmg3fjiHibdMGgZ5FjkUrFcJdhA1SEASzbikz2XTyBu8usm3cuQTgazN4weHPWhuBbPUCWJKH",
  "key26": "2KKGXiYir8NBiCnL1ea2zAMnyPoZdEC2LAGv3MK5VN3UJJH6boMo1QbgJUffL81BDoLBk214Gx9dcxBCYNyKBDja",
  "key27": "2RKuSedAN6CuR52mGGjozJzQUQVaDh9Vjdj4cRk44ko2WpnXrruqEPqKegxhs1D798HRpiZPurfKTgtGa1AUkst3",
  "key28": "5DU85cJ9pXNMm62MrZabYjMWM17mjVqdyd65y8uNN9VwxpebJjkG2NZoS1D13cV8yCNUqpP1PcfRb8SsRj6bfu8b",
  "key29": "5FCJEex7pLmaWy46jRVVkqHxxDZcadZU7b8pXcHi2rWtGDy6E5GRaqKx5t6YtvQK12pwdf3CVeM2apssZEK4cwpE",
  "key30": "3vK1uX9tycDtNmewqajCApqph7pZHZ1Pv8r3vjnqCckcjJKvNSC5F5s1rdTFnR4Q9j9fcim2yuqhFR4UNjZ6GiRy",
  "key31": "46x9MTcGpoW8YyyaaVt91eL5cXNvdRRx8xa1CoVqPDHJtrPhP2iZFF9KhsLKDoqL35VNTx6x5YEKrdnukoSSkphk",
  "key32": "4XD547tMknNnarVyHuJ2GkrPdv731u19bj6PgwBmuxfonHJigmykx3FtXkDYMUR2qJHsGKsVfQY9n5XWSZZzLHuS",
  "key33": "2zZaf12Hb5419TYECdqs93zVi4WqHikgVo4cR8QHCrZvRthG715Qub51iFMPLohZbzFuMt6Hu2sdC3tt9gTf1xJj",
  "key34": "2X6CPcfS2Rp3YeEzmA12X9nL5nMMkLr37fmsAzSRa75qpk52CRJ6ZWWNxdCiHfNavYZN82m6Et3uxEdPye2X4GxP",
  "key35": "5ed1zXrQfATonncTHKJ8yzvDJ9qajEzmiBo5hqMxkJj1uD6wZkFLVxFSCCc8KguSaYzoPZhaYfyXK17z424ZREb9"
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

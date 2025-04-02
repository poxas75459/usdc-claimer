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
    "q7UF3gWFX3ZywgLNvHPqC96besR8aQvk4kmbfEypyBAcZ67B9X9fYhP6Q4Yb2s5PRrU11addhwKJWgmQCsduNAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PvRr4XrkonVYukXzX6py5HSbJZvUiT1MQRXWqXd8hMyRPizSAcFDzgQw45LXvochVnbgkzSHmJiCyA1a8KiJBq9",
  "key1": "7pss8RK8YQg17Doxkk23pKniVM2CEQmfShjHvgiDHw1DNkH7E1k18LTgee2M4sHUBkbUzaDc2JgB99Wxw5hpYcq",
  "key2": "4B4VR7JDRsyAuwcey82tPHKqVR2cc8dcgGVjfLgGni6kLoPfecqj8kyPiWvka3ij6zumfeTaQqPyCohFaPm4hnPt",
  "key3": "26xdfZ55EUHzgLSrR8e41Bj5otuostU6BAD2vvaCxGNkLajv9dSKGujL7g2a81UpofvL5ZXW9u3UWqXjqU4RuPnt",
  "key4": "3SbRkAhJw9mZmXbkzR2qNr7gz3NWuNBrme5XGXXrXRj49d6w1oknQmCgyDRLnpuC6NE8KSDshGdR6n3D71ogGQa6",
  "key5": "4EZhwSestQBM9uy7LURrnN7y9RMfVcjZUBf5xRCd56bkg3SGQfdBh8LyCh13mRmhRBce5hekd4EveNEgoWFCotQA",
  "key6": "58R5iEx7vTiVu17wjErxjxZuyAxV72ZMdYnvq5q9Q1V2WtMdLBV1gTpkQBGCFrh1zXSt5TvedUZahnXCdgua2Xit",
  "key7": "4neSTy38TSbJQhJFbd2Dy2ypU3yEAABeSRUuP2Ccy9Yf2StJqxeXN9yUvZgAC271NB4ZaethzYvWWWpMDL8Nph3U",
  "key8": "oPrwpJDTaDZXcXwWL4vvyK8WepHmQU3xfow7Vm7mhkbvmyHxezJ95oWSefvg3qni7DvtrrHmbfyjaxtsMUKZ1Ec",
  "key9": "4vJs3pPHXCACQGuAZBpezwnjRePKGsuYQjGSEubspQoC83eJY7gXbfZkvzbpwcAzGpjQqYzCA1FWHiVDrmkECeQH",
  "key10": "2rJvKSYeyhdGF3Tkzeek4CwdB82MrZEMfcV6QSQP9Rv7SyTqExgckCmwfG5SzhZ2Yhn3vGEd4QqSnGJiU5uHik8M",
  "key11": "unWoAu7vzqDW2Pz3Nsdo3A7MUqBoKHGSgF96fFFEaHue2mMBHQrcajpEGPZy76Te5SmsJM5zcMNMYiRkjYPQkJp",
  "key12": "4yY3PKgSDeMmumJnmEJVZyAZQqDPJc2qeKdTDuRzSVdHJRjeVRNqKfN11hGNgsoZhjdSwufkFwowYmvz176acrGh",
  "key13": "52PBLDX9BAF57SxCAFSZcjiAo9j3LfxRUcVvCZ8EP3p4yb3qnkTRpmaDoBPRGGktxRZLh2okP6UKVRGR67YRX6gb",
  "key14": "5MCxg5oH5ERDoz4RQZD2w3GJNTnwS8gMn63zgj2SdUk2MG48tuMneEhjJWdFrabQF1cbnqdpdNrM3iv2Wqn2MkXc",
  "key15": "3QkhpFu7yDLf3U493Rw4wUbyTj6QRhAS2stVmhydWnb1JZfewv1PRBHPjYkPJnyrymRiT5m5LU7qaW4kFHrD3sZi",
  "key16": "FVPWWLXW4HfkKbRF4mC47WS2UStbZHBg6eqMrxNhGKda5TU85F1f33uYF1jmygUq3Z8zjg6c2L8D1pxpZbTF284",
  "key17": "28e29CScNmRBJ51pAiA3ADTdzN3FZAre2LAETSYemBsyqXw9jNWMWsCCJ3efM9zv948EdpM6ngBM273a3sfGbcsC",
  "key18": "3MnorHD5Kr1soUJhiN4qTCMQAVZJFTXsG6DzLrPrXY1pJ8KDy4K7tKHjTt4gEF9833yNysp9vXnu5SnA2qRq3XpH",
  "key19": "4FaVY1ngz1hPG6qduLc6qPYFCFH2MwxCTBTzxhfJ6uHUa5qXCghWjep4HvS15THVjPiuxj76SjmzRNd89fTNrFv6",
  "key20": "Dk5K2AADxaGPSFNVmznnYbvED5NoXrEXZUb8he6rR94SYq56qnsZ5XHQZ45nTzZ9cSkJCCgQeE8uTTKjiFrtYjS",
  "key21": "55hW1rxzttD468QEf1gp3t2YvnA2rJTSCLrPEnzNMPAX5MBBNXBuF7aAaC6esFYsEPUzAiU7nVqYoxD66sRem8hF",
  "key22": "5ghFSQUL5LYnXcdCgvdxLrCu3M3JmQEiLNXzDTvtvFatoD21wpzZa5uMgyEUkq4nwgf6ywNy7T1HKmTzPSdK9S3h",
  "key23": "oRUBekjdkakoXPaTwZS5DqiZcUCLKTR8UhNEiEoF14rK6TVBUs9d3iMENdtW4gkXLJGmyhw3vSSJPx1DXGRU8SK",
  "key24": "LMGC26gmJpg6ZvHwnqi4qyxgVcKMx5jbxYsNGW3tkTCaRHM2sAJrdLC7VjVwZfKs64EtipzJzxuHrwmJhcLBKHD",
  "key25": "4uWPLyMG6A7Vhy6JFZkeguGVuGDqfuAMDCrhzWopiR4JXotwVshQp8SUisbHorM2ELxrTjoGWG75mfoLNZkeT35S"
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

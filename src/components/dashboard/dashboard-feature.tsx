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
    "BKmi8RNqmVnfa1R2LGCC5TvbayY9gtUQjDuLWQrTGGutyKLJTxpL7Y3UNccBEBnPhNW2o7qZDCuVWMvinVxup6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gqMCVkZcfeWmmpJLhgt3UZoDJDibSNBrUTZVwofjNAne1L1w965jifsH8QZ6uebhbtFrBvhKwaike8wzHJgz7bA",
  "key1": "3YbCyHB36NkgbUKscawVQYwZZSDkfRaWnwhDoUugRddMGKgp6XKp9UW9qTFtxc38mLsP6LGdWrq6Qod4Pc2aiRKx",
  "key2": "3ZrBWWK2tV7G4x2nC41b2NSHVi9Tn5pthJLnXFCBGdH6EudpXwr2XRojVoS4CYsjtW6Mg8oMLvpbDu6RdPjSTyFk",
  "key3": "3VcZJHLunCavMZvixn6AZc6ua36JnRfpKiZttgLJPRLUfAZrV7sAiskieBUjVAkQDm1gyfFVvD41Q3pBpsERvF1Y",
  "key4": "4hrPwc8UVfNy935TCKfmaZmEbmxT4qzk8akDnmSbUsxn8K3rX9cr69YgNbxVVzADnA7P1WJ8rBsxxPwokvJo4XbX",
  "key5": "5or5vyTLUEazYwmqn24h3hGKNmqfPGc59Nbtjt93bXoESv6Ey24NVvHg7RcDkUJBBjnzLBEF1E8cGyCpzLz2KoUC",
  "key6": "33eoQk5SpWwy3UKz6kDZDoB18TFxjjwFt5ZDMfkfjKVDD4V3P7Xk2Gh8aqpBYzU4tMEeGvpDEp91G9uj9KXGhahK",
  "key7": "ZwaQqU4oYHSTUB2GBWxAyDmzJ7qKC48nwGZZu5iC3K3U3VQvqfgFQqPF6VSoKZGbGPCd6nPthCpDYnZZUcbcMrz",
  "key8": "53xdbzfCuA1r4fZRbWT5CyBJ9ZKBKRxmVzMdFrnoFek9AXr577SRB7CG5VFR3FuMh61LbDrkr4wz8cR8RbYAzrex",
  "key9": "4yRnQP3kXc9D4cZV3ajQUsZ9NxaowuSYQgbLtkn7YbyEK16hPHMV89orBjnwc8XyefcHsqvLJeyUZQipuuYFWuAR",
  "key10": "6X4JqGVorUYL8FTWnwjj1rRUyiVA3JCs24GNrby7vxNEThegN2RFCGk4kfw4uSFqE9T4sJPVBbBXWEx3BNYZDy4",
  "key11": "3XGyfA1MU8hc7UwPvdQhtNYGfaxyWhDohTiEFjhLvJK7fpgKA9eMwk9pAJ1zjzK5Z4inB5j3j2aF4KQGHc9T83MZ",
  "key12": "4zjpjcG4GPdAXLQ9CvS4ur4as36kE1pjFGmpX3xft7GRNGzW76X2LbA9bNdDJmZcmg8sgJjxw9hqmQ1UtKrK3AFA",
  "key13": "28BgZLNcVWo4AeFRBjseu1dEUsLdgQU6eXRsrPzRhxRmFxTgAYqFM62AN2eWaM38cmTmpfacHKxDZuy9EM6MxNW8",
  "key14": "3YSh4i6oju3PVJ88ooindVgxGcKQBLHm4fdRuPRW7Cx4bmMDAmWHBCtVyYneDyCmtSPcs7WTqsgEAc1ebf56hBcc",
  "key15": "5azSPQ8dzTmZpnKu7WctVBr8zR5MokuwMguo7nua9WyBBe1tnRuNCXN947qn9D7Z8D3U6m5DVB4hwLutGWzRcwib",
  "key16": "5AH1hgDvej6u1w3E8oXVLkcgCi2aNgYPFr2ueckeMCZwZTjdhWshdtszn5FtaBE68X2BcN1owYCJoVn8YAQ4zbz7",
  "key17": "Uu9KJhdq2Syk7ddnybykT2Aa4Enk4YEnWjTzsmd1eT8HHSayePYPupHy8B5nG6ZodLXKgtzht832He9KDHLTxAp",
  "key18": "2Na9a1eLgbz3hQEKSPQRhpvhq5obM42LJiQvZEeXAKAotgtYFxro3rduipbx8eZXVVRNdtmia6tfzjazzUymfbkd",
  "key19": "4mhv3exdr9gQxQprZYm9Bh6RQcUq2A8TP2SrQqRx23rPtXVKeDQ9ZNTN977rkfagUxwUvfxXEwZbhxzBNrEWB6uz",
  "key20": "36T9zizXzAB9dmZPewmTiAFq2tfGivz1cW5evmrGRQtnKYRBHW8k13HZnn2yEETx44mutDpGE9eePoMp9pw8RoLH",
  "key21": "46PPGBBCHiTNq4sSFMff2BHdUD1YUU9MU7JK7yacD2US9aNUxunhizBWBjd7kP28fzsVWZKQKU9CQBJnSsCUP4YQ",
  "key22": "5FhbQr2bx1ZVpXFmVBFHtKZpx7GRKhFd5FkQGU9g1cFpFtmZBwUPHB6Aaayu1mzsp6DRjioBEPUa74GtZi4K1uv5",
  "key23": "5aRjWbEcztgvaLBN6PzVK1wik7cwAUgWSGyY4fga8YsZDnz9YAzp1Dxi5Gm5USDoSUDkjNTengHaT8Nf7NiG5ZVc",
  "key24": "VVr7f2MiT2Be5JAFtjh2omywFtr65rvdX3UN1LkDBWZWQxCNMFymZ62ruoSG2U7CuhSCvrQGcFTVmjf39oovosW",
  "key25": "3JdjFs2PWVE9MxTbY6Q3yLboR98g5NV6dtkECeVMkQJ9UR1kAK8M1HVN9YzR7jeCc9bQY6smC4nuFWVGkrRHHmvx",
  "key26": "2ivGfTrVLxVjS8qH6zTGBzvn9z64SpxQ5Cpnt3Km8ucSD1p7kkwPGdJnXsgsm5sfKxDM685X2Dxyhu5NPWcNMib3",
  "key27": "27NK8b38PVGdLhFcCjHESXAnZ9ZB6eMftsY3mCNr1ncmT7ZZb9ECwbjxADWQrME5S6v9yCrw6nY97eoKTq2CMi4r"
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

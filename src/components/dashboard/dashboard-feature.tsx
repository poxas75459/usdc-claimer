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
    "QToHdR8P32ARAz8JWUgMyy9wQevCBmVr6oqFtu8SczZq5FznWt4GWKYk33wdokKvfBDvAQaE6s1k2zSV5VgCSud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1oqY83na5ExgyKmCbCQASzgotEda7YuFeDpeT2j581mDszaFQLQeCrYtRdAN6cc3Nsbc3S1H4jDHjoSSeC84T92",
  "key1": "3pzzLLXm4XndAFZE5WBiBij5EN7AraBg6i2qGFAUgiGQQbee9y2tqbxwkjzGTyP3SUUCEETA7WqYda1Tu4g3WSRk",
  "key2": "2acvcTdQhYc32DYdTZZNrMTSVfoSiD9fFtAoDU5sj4HzKcKseXh2zEC1sfTXyqtNf4Pq4cgcNwWdUccPzEef65x4",
  "key3": "3RcnNbfr9oZGH2LK7WUwrt2nfH6miGf5KbSbqwVnNj5m9FemtVFqBccdckMV3EKBvu92AAmDVtaNZphwESDjY4gg",
  "key4": "7K4fyWcik9tzJZuxQcUZRHveQjB7XcokrzHoB2QEjEKGkfSQhA3ATcJLZfxqhL65srwp7SUvCTwYy7XJijpqGq5",
  "key5": "34pxC4p2iUhfFU8dhryXt8U1JrBSyzwNEUPsBuSZYb1VjjRoJocqHXW6QrCdd5mWYD66nXAbvP7vA11Nuo2GAWD1",
  "key6": "xwVXEq6gWAuC99KPX6DCXehFcAn8MFLpvVMgwHYht3a9boUY5pE2aMJB4wg8VkAvbBTsCCmqwHxuGnh47qFrFSx",
  "key7": "2GRYPmuThJVpgxipBgnAKWKzfiuh5ibQ4pSqzj68pcrkx9vvR2j8DqumAKAqbcp6ajRA1YUR1psgQKnjD7YHwz9u",
  "key8": "5mZztvoTGRbkWm7gauXRpnMvr4yPRArmQnN1S66rLrqDdRo8SFMRpXbw7yJt4NRhKcxXNGZWprGLoy8ByM7XQVTe",
  "key9": "JcL9ZjovVQhTWLag3Zw8c89U2Yt1BSDYAJgbAcnKnwdhRKw7So1Do3UxuEWV7apPttieQH2ZmYkwXxBeg4ZXvmf",
  "key10": "5TTuwNzZcq4XSj5EHXJhFaKvygXJnkQ7PuK2aockCaoSN74gCFDonQGB89ap4tX2Ev1x8HVUgxrsMCqJDzfUdgUL",
  "key11": "4RShJCJRwW6NrjAcbaPo4LrG2zVdQDATAi5PL1r3d5yvoS2JrJ9CqP7iwGb8sy1VAFQieWWTAyfHCSGANe3jamBA",
  "key12": "2BdtSY1Agq2FVfqUE7TkeDTXoTWFfAnpWRhVG3CcTMHNzhmHD4nW1G2GvJfr1jDgBcWtLEM2Ffrj1MagFnekmNDU",
  "key13": "5fzN68rxVozEh95PTZHcYiMJGTSs5M21Hy7oMfjYkPGUZBfmYn32GeXjqHfvabvc5Yaqin3DhsyiWnPHNYGkZj9j",
  "key14": "5ktJz2vZcFtQb8B2a3hvuLQ46xCVzDczs3WU4Xc5yH5XnzQSfigsaPQoVVE1DBFhGJ61VHERr6hoUDV9jvaw2PrC",
  "key15": "1vFczLsK49fCXTyFXVjN2XLfCAsTysFd8wSiU9qjyZK4a7LkZd8RuefAmNFdDtqHSV7Ew4wyubC7LXB79wo8Lj3",
  "key16": "rZm9C9KRZgFLD54Wjh88bH3JHLKKaTdsYfWXeuiTEG4ATEr6KrU5JNqXxxjp7coeqLFesJYKsy9Eh1No6CkR7oX",
  "key17": "4kaoddbqEwfr7on97Djz25cTPZEEAMF17dBamALap1qVde1rypxnCLKRteHrKqkF1JHtazXCvqnAqb3ANGG7cZhc",
  "key18": "2qp7qHrCXoHeAnXzsPwboVyiPsFoxsiCaKRKrRcByPvyDSuopvbMvkZcjcyaYqjkDx1muAgVcvXS3b2jadHAFvZ7",
  "key19": "47ue8t9AG1MGoMhYiXm9zMfyaUXz1jeYUBSwtA851abxaYnxF39c4jihFFg1RWzA9BHGK1h4ViCJZPSabxbrRFuh",
  "key20": "GTMtWiURQ3fxCrvtUErJ5jHLZYv9GxZpzXdYDMmYsfgUXVUrC3hBPT4n7W1SVaggcms4ukisaqv4GGBk1zxbA5Y",
  "key21": "2pZ7JNmd7jj2s9sVtKnmB6L7QdeothtfKBwxM2T8sxZysxLi7NmFRn4RKzr2ybQaX58va4KRFRSR8rCHs51NH5DU",
  "key22": "51Ab2m8ihzL1izXhkoPX9pDBYymk4AYbnn6QYvCS1rrLLKXqwmzhmiRgNUMYRSCpgyhHrP8r5HjgTJRBdcxuMRZT",
  "key23": "4wi4sauwFazkkLdW6o37qj6PXbzchjBRbDk84u1vGX7ZBRV3n9nKXJS218uMZbXbE64RfvsT8mBXCa9qxFCT17c9",
  "key24": "5zjR9xwFouVuyzkxVAFCWB5e3i2bu9chUNMUCCqWkCz6pSB6xjsLAi5AQooUbH6AQoWupUjMPyu2yC1BK1jEeRCY",
  "key25": "4iS5y1WAYve3XEHZ77mRBcZzQzPW3nFMTxf9h4wVXyqJWfR4BBq1sakszjGKPmqg4xVKYwGA7EBVK4pEVCKCCg5q",
  "key26": "2LqciG3bCPBtfri9SrKLPBSHu1vStFvfL3dS5pXvnnzHtLQ2MHAZDmxVpaRqsTtXYhi3oEMPLTjRwtKhseyqSpsK",
  "key27": "4g7Leef2ywmaXiGkDUfW4fzKrx6gUURiajPNppa64xo7vvHXHEtnZFARHwJRMam9ywoFyACr5vraNDSDZ4BCexLU",
  "key28": "2vc1Ufy7FWH88Z1ZFbqW5d8LVZ8QqDYRpaC1KzV59GHBts45tyAXRyrdGvrTyRUasHdT42CHWFvCrS6kJYkz9qhp",
  "key29": "5CZThKTuvxaK2J9VzcBxN5tNVCa9xsmiKjVBAGQDqhPhRW3FPpceDX1iGcaber5CdGP7YrXeiwRLfpUa7CnTpmDw",
  "key30": "mDdPUrntcU4gezrBNuNYPHsQffPanygtpmihWVZiH5ToJ1mZJoL8RFZZhDGYNGomE3GuwkrJqELapdnQWpNFSyE",
  "key31": "54VANnNBvB6n3pwZXWAQdpZXzFkSeCE3KhG62yhFCbhpxXbBPteRveZi4BNbSFTJbGffszupSgPCgpAkVwn5cMg5"
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

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
    "5jbij8V2wjoFVJvKphqkncQz4M3vodTuB7bAmGPzQa9cdxWba9NeStYctLb5cfycSP9YRp8fZDoTkBGcHmRhYLhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RGYhYZuxWQFXs9QhhP7CtME9Cv1s5T6wcTagkBTJqnzhdcDwSRfscdX6ntq2yigVEMmHdkPFmQ6kcrXtfh6ezEV",
  "key1": "5PXjCcR5i4St5W2DPikvRyjRj9jovJqXEuoGzM4kqXpHUH3X53XLD2paBs19MWAj2mgRTvzzHhN6LvGc2Zd5pqs2",
  "key2": "3LKbamb9htZyFbhFNmxULgnf3uLqd5auzstqxV1UbasPcmvZGuGWk76SFNNNC8QxuAigi5fvncHUt7AWudwZaxxL",
  "key3": "4KMLJKW4bmpBCur3vUQDEUBtqyKVpHW1sCfd2sNiGrxMvpQkY2Po8miJg69jfC1EwnZ1W7fcLGhmCZA1fnMidkrt",
  "key4": "2zk9KjKmAYv3WnmNBZR4ZseMmtaC2Fip3NCkjyP9akm6jzNM26pQbGbYQwL5hN7uMuuSXnCVvyNi3oVKWFdFH9ff",
  "key5": "2rrXPaFcu6fLZLXnoRWXBZPom9vrmXX5dosQdiw3veTpTYunzfd5RiNn5rd7ixLsjEcgoQDV795yMAhU1D2JVPYK",
  "key6": "3TiCEQmM2RHy1ut6eo5PAEaYJjRc3vHJPcBt8RFdmhvCHmpSMkc6983Y3XHuUfxgpbfrkSd5V91DWcjGotnYuH9a",
  "key7": "65ZugFPA8KstNHsJX4DuojizUymMFgMSFNyZ9nLECpEBUNXnp8u9eXomMpo2KMSajV2BYnCpKbCREELnCL8HFPAX",
  "key8": "5WW2ieJzPvacLJnqnXNaoeVwScwKQFUBLwLxSw1He35QArr5AiPj2xunLmCmkEgXGhByoQ4enSY3i3ZbLs98Nx4H",
  "key9": "2KB9suHh4Q9WZiVDk5vMpVvDYGmss3ixUCZegKE8ed9W9KTihWZnG2VgV4UQ2hECQDVEFocQ9KGJ15Nciswv38S2",
  "key10": "4nWzL1jCFytjuHa5vxH3iYBCJGsGmqCKWowiVuNgnP6ZYiYZx2TAAqJG7YEPhTnH3fpq12dftVXSdCvRjLN5RAnn",
  "key11": "2tHotFvbuq7VXSi5xfUe7pWqroA5F4ci3iDK8UL1hHExy5n6zG5YpF17FSgvsRwdNZ9fVeoGp9XBztmTp8wBJ6Q2",
  "key12": "jXrXg9PzYy9TmahQUrDV2sMTuutsG64jHVwz64w9B29b8SGqVhLKmUfGfLbJJPcJ5VMQn795mH49Yx4Xo7esjMS",
  "key13": "4sq9xuVwWTfBEWznMzMzgbJ65pMhEfnuy3ns1153jWiYY7bKGTLBHifo97Cqbg8w1JCd2W2EMjP3JvSKJ9AKULmr",
  "key14": "3v6pBBXSA12GMoSeavPZ1q7yiNckBMcqibskJ7Qp7hUArPwCD6iMyHN3uENWx6uT8RDwHnXc9BtsB9QvcmEeCsc6",
  "key15": "4p4arzt8E6zCcMS2HVvjw6FbNYJCNHXaAdm1QNot75CG15C3rxqVUfTczBPEqEuYiWpEcuiZYeRggGbg9uJ6GfUq",
  "key16": "38uefu2T6LrK5w9TVtntAayajYEHMuFdsc84cHYUXqjiseYHQB5tQRDjKoWcH8BAmmMcSyYu71VdG9Cbmm9zRVxE",
  "key17": "2hHShWKSYawh1LDF8PsxouTtJzKpW9y7pAjQ7ChKM2henPStvphX97xVs8eVHJhy3RXVk2PuJNCK91YGR2dyi5cG",
  "key18": "4p9FoAHPqmy9GkYpku75bwYQHtXpBVkDCpr25bCU9VdSaDcBsjJLip66VT2pZdRiuM8HVt4Gf6ntd6U1MFA3mH5s",
  "key19": "3mRKgGrFe37fdGAjiAYR3K6yWbksYXwXKYF92yjk7RKJMNtumfNaQPEzRSzgD86VBRUSmzC29RcSVgicPx4NqyaW",
  "key20": "5PmfDrADEWJDgHLpFxFzDv8QqUy9EUmC1XzGz8GyEC7XA5UQuvCGqSny4FDGd1zfgfNkNVazc5RBLdUNCwbWh3jo",
  "key21": "VFkFHLa1V31q9MuveWgTkLB1h8KmnmAUyX2CZwCdNVbWfQvErNwL3otioFRMmFxjJrAwEHsdcF29K8qBAbde92n",
  "key22": "62Vh3HnowhW8Juh62SH1aYT9PDitpATxSajFUd1ZP1iTzLDZru2idvfz7XWK2PwTqY2zAKy25rmryGdvKpDHACJQ",
  "key23": "52pn5yUEfWpKgmc9PN1boirsb7oM9inodAfMDD7sc2omBxmHLe513jeNJ4rcSCpVaRHQHfbof9SSgpnhcLF4HAW3",
  "key24": "9e7cZV5ZzPnZ2J8hHtN1BUXJaXGGdJjne8c18H35VhxyXwkFd2GXQ11UScGcwYi8uWWk2TrSubzdGrNQ6XF54uM",
  "key25": "59Sh86kwBh7iWA2jcSgGJboEopXWRRn283BmEofGzZSymjiuTgX5rP7jtAJxRXDcEpBa79UEhKBPhvg4ZoevBPDw"
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

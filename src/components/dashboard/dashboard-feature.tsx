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
    "4MCTBiHWCtokkgcnaX2sM56YWgEwrQaCDkVSQ2EyCTewYsTv1fx2sg1qagRApNDwAXUTLjRLEBCfEQ3vxLuq9d1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x4hZ5vFWC5ekAR9x2AyhsQde9xjsvbjWAZXzUDyjydKYYaKqxQ3gc137EURbboDgoLu8G654NfTuYpFW3uh8xQh",
  "key1": "5p1S1nUSeATDtMCDBwSzc2VcwPBcJU5gPQzYdTmGpkRnb2od6vCjHgTUWNicczpKcVpy31MCZ6WKyxJpSpya8vXm",
  "key2": "7Scf7aBMktwE893gDyfPStCCP4jEsrYGde27qsiubWnzMcFVUo3XngHLRUdSufKEThtTtDRqDxaK4f1Mczqsrvo",
  "key3": "2D124Z8xjfTtaP36oxyp5bCxRbatnVQtSJsCiWdYt3N3mRAp1NozNCvuVy8jK33KUmA7vfoEehX7A1PUFP8KqovY",
  "key4": "2rmABCqp9GNxuu5beHDT3cCcR9Tmibz5Kqwh766ZgL9L1brw9HmdEVW7TLc5rY2ojymSniShpdB9UT4kSgRSd3Nu",
  "key5": "5bJu3AcNhnFeJ7KEKgkzATV7UyvA3nxJ3he4Df1rzyUQqPcFpSmzPsXRMUp9SRLrgxh9rcEboUY4iB5QLiN7cmqM",
  "key6": "4aoZpNhwZBUsEkcrD9Kt1FBkjD7VnGnqzMh1w23Hfoqut2RRsqDeHggViNoBozVJuuTP7ttNpbuce8kDSMXFGwM3",
  "key7": "5L99QY2pmJnz72Vey9PHqJuVcFwHwn5ajupSXuux6GQbj8NGjseAb8ByHmvxEamPNsfdoNDCujM2UUJPGxLnWdtt",
  "key8": "221aNX1hXfW465BAk5cKB2UQi5u2kSeqswoDuMZYDTzGZ5q2NKNfwETqTdyBMnyTMgWP9inq6w5FjDVvL2CvhYga",
  "key9": "2MvQ1KnUbLaeNd14edQ4QQM1cy1qDin5dixgRN6pipK9EhU2VUZpUpE3sTdeiYWpesELV7F8fLE8bMRmX3j9grxC",
  "key10": "2xPkA3ZcjF5rNYyHQME6aZkXgCmJbTMEwZfh6uSEiHkzHSX7SRggy6DEDDHBtqFoEmSQfuQbSaeQCg5L6C1k2iuC",
  "key11": "31BgA1QhK5pzo5BFSGpxrr4CuR4ZU6D3LtYsa4yjMaeRbEN85bf4KmGEfgjz71DYYHhXYUVbTyvkgk5pPrh9tmx",
  "key12": "2rkDtFHxWoC3ZCP2QYdatdAUaiapFNrdGj5YbfszDRnQz2kVFhneq4d15oRWB34AA4XPu52YoYZHH6hRkKPhGiUN",
  "key13": "4DiFohQqSWNfNNFyeCV4n7CoubS68waZmnvrZn4NRdi7zrPoyByAfUMkvsQBKSrwnEF9nR4Px4zNSpzz9gXWF3He",
  "key14": "X736oqNjXsv5jsTpRiiEXSYXoKMmARBbfERVEnrL7mkfNq6QR6b3M9GnooVYkrmG2m7PsQi59fUBDeKU1n1E2Ex",
  "key15": "3KTY5tP5uJZF5Y6igVcs12JZkZfKsAMazZYBDcKpLW9m23jBNoxcfdzExqVgUpeXRVoShq33h7fPPrtXV8kpzcnF",
  "key16": "2ct7ScmTSfsNhMhoJnhKFEUg2mq2gUcKEw4gomzGXbwBgnH5UFyVD2XzbrhTmtT44kxey6rJCaYTqSGNVzafPK5j",
  "key17": "22BTahtTsg8CSj6YUXhcuVFhoLt7NddMmay4b64qvoC3RP7R3LWKRm2b7N4ssipzQNEWtf4VFuz3w5s7EhtUmVgo",
  "key18": "5uSwjuguBGVqS1eyL1Hi5DKYsNQzhVJWVX9o5fZXVL2JEi7BZ9XK7d6g27Yxz8rBVxTGeAGY8jknqhq1xF9xmPDG",
  "key19": "4Gf1u5pr9HbrunzyurNjrbsW1uhXbKZ7jfGidacsW91FbjgqjZEE7Z4A2646ACHi3ohSCG2AM7P6Sn1unUJ2Xim2",
  "key20": "66NwffqEoVVJGShzHiZU1h3JGsC5ZkzFL56Aps9FShrrzsEz1kbEfiMvpvNLSJMR1GFhPjzF4Z39C12YG8bMHch5",
  "key21": "4ePvHTbJH3229F4QCKmDF4Vbh2UDti4mqAebhr3PrMzFWote1FhX66t3HsdQ6QrxBwRyw4HpzpeN3wueycCdLZv8",
  "key22": "mtPp7zerWnkh6NtQvYi4Ae3U4NJDz9qePKqm2qs8jtFyEZ7AFtSdouojfRvih89K7Q7jp6uZXDZduZwKbZeBGb9",
  "key23": "3CHzc6gKxydBH1X7Fiqv4HiPJ7HNmjCgQyDGSidXXL1fcnLc9z4HFMLD4rFmBc8Aq5xtBzQvcUAxNWVqBfdi7C9g",
  "key24": "5FtGiok2whXrTAirjvyZwNyPzgpcAYL9TFJTE8L8ZyzhreUtUTAALrKXpU4gT5SpLbYtnG1n2vTyttep56YoGL59",
  "key25": "2zSnft8eewpGqaVtLKDMtdvZAerCzJ1tVhgRnm635xiVzFBCPiF7orYagkGce3MLzA4YCmubapWuxWFvtvhA5Fi3",
  "key26": "4LJF1Ktz7bacff59pCv1kr1JrWxiJyD2gszd1STJeTmyYEkdCcmYNuA1s5p9P847aA9BEDryHmFjr3EhVjJ3WJuP"
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

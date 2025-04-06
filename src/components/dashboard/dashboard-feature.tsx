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
    "2SD2afWocysPGLiMiJmfkao7HQ8hd8q2hsghXvMiBBPZXxHerc4QST1DeCVEtaCjVo1jBz5sVbtxyfW4JsbdoHuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WyaDYduH68DNSRte8QUz6HNmLJppY5Sp3mp9yq2jSQJQUaE2u5TP5CG81Eaci2FixX9TEa6wgppxRNY1yeDCa87",
  "key1": "2oE99d4uPYWfL69QAJXTAYGE2iM9qQ8qHPFUwnkj4Z8EbFngQioMYpKbFy6wh3GppCF39HuxBtcdJns5ZTFD8Veq",
  "key2": "2pwgaWJpoygMKvqVTdgWmuqNmWxbRc8yEFtTdH6BorKhAQnMeRwH5kwwxysNMjLyYjsTXqeDuLiXpW439a5v6Ze9",
  "key3": "5DvxiXdWS8dB9DAjmvFTahRnx63xruuQWsQq3rG6q1F8SPkuAbDHQL36AXZMA54vGnMojk6v2QhRirNb1zhWki4z",
  "key4": "nuszT4oHFCFGytbSFWzV5g5t1oRMDRiwSvbh3bpHmGccyhtPgzx35nMF5LyELk55fAcKFdrtB2pWunNasmzHqLz",
  "key5": "pRL6a1Wf3mgdzSLxz67H5mtgUGjhBZ5neXof18WazQ3Cy3jgcWnWyLEdwJm1Z9sCGsc2ELRwsQVdyLgP4r8iWwf",
  "key6": "3sjjaaWKjDUuNwnfjgAngse84A7ToeSR7WJm7KvG6xRwNxjSaSnAtUFjWKpHUeoKthtPjiUCw5pGDyzPG13eCUWq",
  "key7": "36LQGdv8NFxrn9vCtyZtZ8pabYa33JrCQiSxnzcYUVxb6BnSsJij3XzB6DXz7oriuM75JJwEMXGGHcrPMEDJyuoi",
  "key8": "5sg1GMGATvceLCBR1yhgbnwr396p8R3FvrWVaEyam8V7vL6sPgUCgS7vC4paPprNbbEPYBserewHbmyJVhacukeN",
  "key9": "5XubFXqLq16xoH7WCUhfz3hxsgDjchWUFP8YqwmF2yh2w7keKFY2G5J3AEshx4RJcZAH4sz7o4Eym6xnHSkXbPHH",
  "key10": "2XjFGf749nvmtpnvKmTdW7UTYgiRqYxnVPPPu3Km1ZvQY1kY5VpYdNMdGgm1rTGjf6k1F5wuNkFFWoHdZ6t2xdPp",
  "key11": "46owfeTfgzrruwbiqTMnE6qbVoXXpwhrivdTroK3ETCEf7oKqjyotEmWs9F3df4mvid46xLzmbUEBMnD8PKo64vY",
  "key12": "5G1j8UJYyVwUJkXrydhAiEQdVwprWNHMA1CRBVu7M7R7ej3LvJ4SSyGAYhCuFKSfiLVQL4wggyXVggR9K9Q4o5SW",
  "key13": "3yqCMrzmeUsJi4KUGAQu6brGhpBH8dp8nkjy68fJ7hU2Z2ZGPoRCKPfUAE6k769BKfjKKLPY2ra3LW9KiXW1Trsf",
  "key14": "4N2Adnxqnm6XFSHawLkQcbKRBCckcEtxoyD9QvgQ2e1CayDA3sAg2RLZ9HJZiCcQ3bqZKnoVgkKZ8kHEvwbaBAav",
  "key15": "48Esfn8j76w1wG2od5AyGExzriUgeZpFj5DWVmbCDkvNS2wd5JBiZ8cNVtf5vj1n5LmSQ77aoipjo4gfcb13tLdn",
  "key16": "2pgWBFhoxwDn2ZgR8jGA3Tm1MfaB1KWdyWDG5kELS4tKxQGWmX9vxfC6BB1MfdND3rd15PG5RjBbVn77S8MVEPur",
  "key17": "27qy3f1iTkBYt9Qv7x244AoBDRhuqjhqM8qe9xzdVVjSZA7y3eHfop79oj17So8BDEH5Y8Cx6VayVghxuXReovRs",
  "key18": "5ubXUsuvfr5kmLTsnAr4WKWpk3AYuuVgXEDUHXDxVYFRvZrjZygxFr3bNzy4id1z19XtRNHczN4miT4EXxiDQxS",
  "key19": "3H7CCoZTNSa3xkXmEKjR2s4FUBEHuXhCGn7XMSBg6m8Rov9U6TWh1YVwXBXo7iv8q9zNnGdwfTUoaTnfb5XJWdHv",
  "key20": "63MCL6ZYRhSsmc4K8VY3K4jURbWjF9q5ojccXgABWAD7UyHL4NpzZtPadwKNGZGZ6FWWAyKP71TY225AGPbfy9os",
  "key21": "5DciiWMSn4VmGryjiPSxEpZTZujLfZUcW5WH5pnhq8Lwzmzqdmv1KgFyZWuG8KLSMWTEAB8HJetDLKXjKQUeHzX9",
  "key22": "5v1s32efJtKA6sb5swbYcdRvTy1Gri3bRXyiZGGjiyc7AzUiNsrBqZCWv3Nm3xszwLbzxKsuGFZBnNDofN4ZXRzu",
  "key23": "4cGdNKZXR1Ex3HrgMzbsimjCdc6L1Nk52kjKHTpg9FTFJjFk6bcL23Fqqvg5xbTe1GQRWvnLv9vDcB9hiquM4oYz",
  "key24": "4XCSmzzBwh3BJ4H5oQ5Up9J3SoWbwemhkQcBzRtB4uunLGdxChb9MmK9Vw49avAvVqV5eweRzzZbrKMhDM24YPRg",
  "key25": "65RSmyKNdadEtg3oCE9rXqV2CJFRB9RpbqNiQ6qfnsjb2aNqtEFeYfUU9kZoMDMbqRmA6q76Gi5gfEniX3i34wv6",
  "key26": "4Sv6oseWzxWrBLtXsDoGJxbSgsY4fKkTYLeWRnuiYrQ59kuHL73cTAAW5CdDeV1PVVtaxEJVRxRgHZMtetMSovic"
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

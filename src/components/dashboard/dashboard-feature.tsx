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
    "4koJtwAhHwP17Y56vkmui9Jr1K9jYdZJg44cNz5ZdAobx6zVNpEPpwo3ZvmTcRUhLNjKh64j1sjGaaruguyXg9JN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64GJ3HbPV8naFhxa2P6m3YWyb7S6C635yQUk47sKkcvATAsuxCTgNxf9hh3nVSZkWmdvcoWedWUz6dG4bvxTtqss",
  "key1": "2MZRhScG723cFnhbcG24JrgAt1krSmPZAPeDwNvwVnEU3LfCZih5KCo8wc1J32xy8hVQQScZXb5DY8SNDkKvT1D3",
  "key2": "3b1uXzFo8RsADLfK7x2VMn8cJxhUf6XtZCAEdPnoYV19p33ywUcYgGaQCCwwLR3GMj1KyL9AF9hEMvPPbfH3Wj8U",
  "key3": "2jay7HbuF4ugH2uw2YgpuenHm9HvU8vAMbxBsD6Rz6fzxbTS7cVP2PKcNDDkGvBdDyiCvi9oDpfD51VMpRg6HRC7",
  "key4": "2DyX5x76BZTiXQVcnHhBSvysoa4ese5DfyBfxx3dNEBvQYGFLTaf76eHHYwwr3QZ1kXsXT7tQemT2apS69MeFsUy",
  "key5": "5pEoutaXVr1cYyVWMoY3dRgcdowpztsDjQZkQAtefJWZoYnCoy6zoyLmGfKrGudREhctFxp4TehpzXMtMdhPM5JP",
  "key6": "26wSVwkkv7z6rqCQfHepHcbdu5cMDZZTbYiDtJ9mRWnFbfmrmgMKJumLBhoNZv26W4Krcr9Y83tTXbzkZU9Bmidu",
  "key7": "54BibDScJ5zc6an6JTLBkEGrnSLRUYJLC6hTZcm6RotexJo2LA4FDcNr3GXxg2oGjkQikfdp8K8a522Bn3bAZgGx",
  "key8": "5RVeEoG3FdTn3AS9kEQUQA8e7YZcQ8YkfPt3Xb5uSchvVhrxNjtMJfBfsusTychPADNMFkKUoH1vvYSJMW6Pa5mD",
  "key9": "4xLunE8PE7FH6kE7nsUV7Ahmw81wS1ft4UGatJtCHjEiThkkXJX9ECP29vgabEJQZ1rVWzsw1rxTMzt9WKPnfyiA",
  "key10": "3JtEiu9bEoEE9TWEV6TdwyPVzhZKWaJppdr8exzxkBYxFnMsFwKbGNeYPrheUniRaRi61PwZUZynREhQpaj3YgAa",
  "key11": "3cASFBdVWKYEZGdjZQATCMKoZFPSfbmxPxS6144ZET9SntDTRNep2McuY41trrn2oj9DKTmTjHHmWkhbJmjzFU4n",
  "key12": "HkD4xHjDDuaZ9BYroaKkqwgzS1XWtFZHfu37THNawtbg4jV1kZ5w4jmSLgUD9uWeh6QyHHQWBsUJkq4WueLFH3o",
  "key13": "3qmpGoBgLhvN9F7vhTs4pRAnJUB7MNUBzfMMUDgYvafbtMgLrEPsAuTP8JxhcjfTS92wozANiHDa6cmY3b7Dbqr1",
  "key14": "beZTEfx6ojGNDaCfSAuJUxiSog4WMKRZDyKSpNNLd6YFZ8Lt2YCJS6pqkpeEB9fXzKKF47udwVbURrJkYskrTrQ",
  "key15": "4JnH8DoijV3ebtCDanZNvTTgaHeZx3Xmt8LoGGuQ9qkWn1ZfQXXzZv8vn5ZrS2L3WDb4aytGS21aLeSVr6Ynmgg7",
  "key16": "MymzmLpMTdTLEfLVZB1HjixEVzCivQWLp41oZ1drf9gDTeCjgtzeay435pa8jmSovKtiGz9djsRRJoLqXEWQPmn",
  "key17": "2xWDJ1rBsaukef3LjJTuhKsJdPgxdsje26HkPq2RETqT8db2yvxBpFHDWaUuvKUcezgGHDD3RJ6jvGErX7Wj2z6u",
  "key18": "486HoaLQ8f78ergWoQfY56CWETmxLcsz19b7wMSq4wuYwodvTphExEibAiSuX8iN7XwBmjAygvEERKNSHJLAweyK",
  "key19": "5W5cyY8RAoCbfVUpN2eHZ6rMqf1HgdVk9YNE8WFCM1t6ZAMrjDfFVaC1DUGKdYFURAh9PPZuRYss5NwDDTGNhB3r",
  "key20": "3jj8crw77en1rsBQxBGQChrpneY134JQbhqyvDEEHbCFQoqyf451bDLPyxMMzMJmdhqcMR3KHxh8ytJmTDfCwKNW",
  "key21": "4Knp6AtXEZFgRqJpuBFouJtAjtM8p5otQ4zjDFbzGn9dVDHhRe5u4BDR24cr9G6HVE1euN4fKXFmYLS2uxwMfP1h",
  "key22": "387LhFnjBLyTz8tQWMdBqnypL1V2nWsV541g1HxzqeQYpG6UL5XrzPEC2GkzinuurAo1rUGhcmcdNcdFshz2hVCj",
  "key23": "3YiPTfRytWqt3vS6ihgr6Mu9HhKm87rvMiTrcToiyf5osF7182GjnVAfFdZ4tJifVyrYwpZraNCGkEqkgz9N3hsw",
  "key24": "2i7UsDYtT3L6W5LDwxcJHbtWgQdmptvoyoiZJZptJpTkN4FqBNyu5vSSXQeCYSYXvuJkFChnY75amoGdhdzmhZzx",
  "key25": "4B8q243BWCgdw3FvmqUQLwcLoUH9tyRYxpSzXPhQBswddVf9zAvTSZvA3bqzgznGxzmrYAzuGjLtZDPFMpt6U2jf",
  "key26": "495YmjNNAQWUGwV6Cc3QVzkRiPFDSkESEHSWW4xWwhoCi49KjB1LvbJgktLmvbDsQzpkQkLDsjbCRCjxpJrc9JDV",
  "key27": "4GhTffy2aEdn4whMykJJ6QgxhWYHBQHrm2QmHegyS36LETSzyK4tD9mbVbCscaVrU3XYbkGBTpNMkjtrUbBUEzZ",
  "key28": "4zuWvZgBwtXKNAGii4XNnq98CJ1MvxnRzPp2hasKVrZWKKKfybe7SCQxnFYpncjNwLvbGPL7i9Zmo9izTd7huU7N",
  "key29": "5A7v7swLAJg6F1E5qKM3xF5kKNBXpuhG7yoaanoRTqxRjG8Fz2YdUnUG8WejixE4qtALUS4ieCQsYzuj3WJeenFZ"
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

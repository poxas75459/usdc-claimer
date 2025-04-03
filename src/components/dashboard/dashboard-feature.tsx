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
    "5gAwbzB1aj9BgkUx24ixZh5fS2kFPASXVzwwYGfjiEJksY3pSpQDNHiUd9pvULqW1eaBDqLH5QNi2vrBht5yim5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cw9YX3zvcK3D2C21yaVQnhgMAdeg7gkRFPM6SSpuoEmDaDujbjWgu3FRq54LmHUygEA1zwGU8ZgVXGFMQ42rJta",
  "key1": "5ovaweL8GP27c6chAiZTisFBAYix6DRGysmADycYoXdMvkMcF91UssKUwKRrjLLuisuCV4CjwUdGDBb3MWizRbaJ",
  "key2": "2k3CmB5NSLCLQw8w9MoXjLJZpz676UJqMxjNSR5uyLMDpEmzL4tbyP2cQV7HfqqFHBQCuYt7NWraUPiZZumLkjbT",
  "key3": "5K49Whsy3hxjS32LaSmbwZmufsTq4HTV7Kg9UEpfWaMQHuopvS1KsSMGCHM3BducPV3xHC7om4auUzQMkRJeayqX",
  "key4": "mTAj3mE9yAJ53HZYAcEMuKzDsxRHrFk6W3BtAYnqXmzxmVXsF7P1Ysz83maeEbfk9QqguUoKCj1jES3XdtcZ1FH",
  "key5": "4CSLDnsFnvj1iNt6VmqekLP6UefiUe6ecWEjQcoZBVVeLci6b9HEv29eecUTdhQmhUA2gWiFBgt5r4AMSRqem4GZ",
  "key6": "4fTsA1uCXr9zgnVjSDrKq8o9d16WvTWUzdbdBKZePAAako1wGydeRPZBKbhjz2W9AkTJ19CmicZRoBD32WTDKGJX",
  "key7": "3kkHgix6huGmonkoCcvLLjkhS4JZMTSXrvis6iDPVWXkyi7GBjxGZZ4fxUZgimw97TLoH3SfoGUQceq49JuNXowf",
  "key8": "PPjpcKVbyV8e8GaKccV2e4Pd9pmsm4o8pfMps3AZpqpgScZXQ4e9RBcebXAC2oG7Gnh6DjWdNMnduJx4M5DSHUB",
  "key9": "3N7TK4SSszR2ZSRPeX8YBSY9Fu1CQ8qCBHa6u5sEDR9cVKwmaCzLs2tfbXuzcGnZDhtPRvwiJ7VwzRM6HMjnA5CE",
  "key10": "2LrffEzLbWaFzBy58Hevc4kGLE6S8pMD1k8v6sFkfKNot8vKEzrYrvjix27Q9cj1GHzaAU1V3XX1yNLpit4fhZT7",
  "key11": "5m5BjTZ5vnfSd5ksUc6B6uD1AuZFNYHvF3KgtVB98499HDpE4zSYdVvFYdZivY1VcPJsYvYT7jmKPaLx7WY1LNgQ",
  "key12": "5xDuyyk687p2pJQaAHhzGUk67MPs5paj6xEJt7WDtnhMMkZcX7nkTbpCRNs2eoi182B7aNVX1qbjgqQVCRAtGo1C",
  "key13": "2ojCms9UDj1WnC2E38Z9gWKbTYtJVFsUi8da8gDGx6q177R5crW8qd96b3tFDsJYoPwmM2kJNV1sRSQ4P9JwjmgH",
  "key14": "5sELaPG4uQuVL2qKiu7KmmwdL1HcgM2vKcnqpZKkurBoPFSfuLG5ZZPG7H2GrnVratf4HKsHuUzigBDriGsScoeG",
  "key15": "5p7Jg3UjGb4qTMMbR8jekZWRzEjKgMouH94pgno3KpJE9knG8vbpeTZaPm9N2dsEg1FMfrJfFp4FmZ5EFswEkgoX",
  "key16": "2RNnpCyKFQqzgMjN4aNc8EVnaBD8u6n2Rr9SLnDDy2CQBpxGgmA58uxDmGUfLh4rJQcxP6VHzEXr1i8wixqsFYR2",
  "key17": "3xjnfBfsK9h11P3YhEc9nzC4RfdZJCGgb6K1vETsHnQkBXvariTsNJrDzMBrRXrM3mYoYFRFiGxppZgpEeu1DUUK",
  "key18": "4eiyehKDBHzQGFT5PgrrYSitsucrafjfnUvvP3V7smGJVb1TEFVVpzyNvwAwxbPXE1D67tuSSDh9XGPPqbrn6Sm5",
  "key19": "2eo57hfXjiUqe18zzsi75BfMnZ6cLAiMW5hPjN6irRP9bohcJqPoWqJGezFFbk2hEahD1N2nB3EBgMzg9JjzoBby",
  "key20": "3icACWN3yqC5BLFXBxugMYcr1KpjRqm3Q4kZQhw9Pqy53q39DUwxyz1k9ugR2LKKVUPHL4N2HUjXMSWSfSg1x1HY",
  "key21": "5rog2TLV8C9mMFRNEsQ5vGcxV2N2iNkZwT9BEjHhT2NxfimPEYZxYResVwyZfdak3rHxDpvMS6pgDozrtXs6qUDj",
  "key22": "27i4REWzf8CHghUFaKh9wSumuBE4tJZqTJqnrRoAHGMsFm57NV8JDaze9iyekjBCb8dRXTbXhbJAy5dCgvwpKxQw",
  "key23": "4UWMbiqH8N4cEQxpk55sdBBozBCRAU7CYnf6RWHSdE5hbEHwQptoo2wCJN369MDENtGku5dP2f6t7kv822wQN3dZ",
  "key24": "5AcAFUY9Ygq2ugT3eZ4pTF3gFXkdQRnwij51ukFR5F5N7fqrDdJbyeWxomFvfKmJyJ28LNuATscuhNiRivQ4y4Af",
  "key25": "3zCaktBmoXmmDtoAoKYGGe31PtXUeWLBG4o8fgskG4qsmKBkgCmeuYxgzeoXrhY2LPocP5LAH69HMhdy2k8eDjrZ"
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

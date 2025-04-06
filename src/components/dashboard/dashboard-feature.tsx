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
    "4ttUwFRSVVk9sX6QhJSuQx4eH2jwpEXT1YJVK9ZcqAx5RHPH4xxmBeeNgDRWT3GuvDY2b8dmMizqXxeqePXD9EUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uzHWRVnU2eB72nLixX97Y5cQdBwsM8vps3tqRSxoCq9wEf6fE7pv8HWRYAvZ3viW9K4JNYJ8SuLwq4eZuNqWfKM",
  "key1": "QLygjWb4dzFyEQoQnzT5WFP6AMSbEhxjNZ8ZK1GdAbGMa7Lwj733xURCS7Y4pCJSUB824E1qerHhpEAfgmNFF9M",
  "key2": "57vgVFVNwuSVg7gowHVZgUKjdvkcJ8XpnDsWtHNf71ZVPhdehLTPthTmPi5y4c4Yzb9So3WspbgqKpTzc6sNuTie",
  "key3": "5xsgAYsyRxJ9VNBX8NrVMKyfDWkJRyurfKTgwz7XdjWztW2iMCeam7h5SFrrrKYLS8hdahgV2H8vqgHzLuYBhYu4",
  "key4": "1JdTzDELWLYYZT82Q6fv8ZMxJUvZUzfqpWu4A2LmosDQ5vomyeXzPoc27jMBSfaS4Se4ZhhrYstcqBvXZpd7SB1",
  "key5": "5R96Aooxexc3n1ouRSMUghgth7oS9CEP9W3GazPzg3QYkZHuWBdWheaZZaKBLTwFRCzhYaVS13FyJVkAL7ZXrHD8",
  "key6": "3e9zsdUwuux9otzjSUqLvm2qCR3DnEw1LmDy3Gv46jSRHarkPhnr673nutQ2DvPkMkacVExGUhqpHSjxJanTKTJ7",
  "key7": "3XMYor7Hm8SVaYR5WZpBA2o7P7iHMQkwGyJw1mQW1RLyFtv7zhpeQuGdumjNLJYWSihhVyyhnz1yw6jx35YTKL89",
  "key8": "5Sr63PZwHttEg3msxf7AtHL5exkdSDjpKFGraAbeaT1ADT6xoHc2dJgno3GM7J2fLDYpnsy7DVtW5144GeKkpC8m",
  "key9": "2qZVV7JWDgi3y6ijij2MphwtMCPkmW6M6umq8HkV8MuEHrZY5dYQeTZiUksaiJW3eRq68DXuRU3RhSqHCd8TCrzR",
  "key10": "43ekDvRSgsyh9eFBqsYZhZMbi8SJmEPS2u99xRQo2ydfMj9EBREH8vWfeF2JDALiJSMNSSJCusfxHheGZP76mXbj",
  "key11": "Qkpzd41reVFWeBGRdbjTtB7HuFqxjsUJKhnUe2tEZv7grZXmydZUXgAUyJnjUdZJPvPQpvCjCjaQ9n4iC38HQvT",
  "key12": "5sa5LaHeVM7sofPq1HR6xsuFyNvmTaBr3Wdygz1ZGSza8oSAbECupe5MSjyKTTzLGjiMbXfsFtiQGqJAkDwDoG8Q",
  "key13": "CnT1JbgiEuE3ENHZRQB5RqrNPeV9BdMgyR65cHVihJDMvkVs7vHhriWgacsivsPqNv3hj87da1GiP6q7UWypSb4",
  "key14": "5Rrphzn1dSoN6MKwnLSXWZEvFB6PpxwQJPfezVrMJfpAhRCGtFVJusFKtkUTkaQnhT6A8B6pSUVxG2DJxTLJYpun",
  "key15": "zxBL7xxCuuErxQQkHmTzXdbHTBEpoq8ihgFMZUAqbCd7pYedxT4H4hpMBkzeomV8mqWiDsA495cPEH7gfnywmvT",
  "key16": "4HCPcFZXoeXUv5zhTSZ4oJsynnMHT6jfcgrfjaMCtd9JYTYvMN349sUfYDAcGbFxb1KcF5b2u6T1wj8LvtkV9VGL",
  "key17": "4acigrJUpjGECKGgDpDz3CrSjE5ZSpdk65BcimmR3kQAj17e8Pr9ZBBWJFyBbwCLtF1N8TrGDyJ2sm4i5Ubzesmn",
  "key18": "3HUP2rPi2u8bqArk2JCEprynjuRrfj9FjrTiF7soQtvNkCnJN19ih6fuaWLvk27KJRUyNo5GNtmhfLRtDPjdppbJ",
  "key19": "5zkbBWcCLxnQj3BaEoDpjCDFrdsbDc24FfVbf38wmNq6ub6iUCdR3YdpknBGPiKgoti5aPuYvAcJz3NwbEcU7abp",
  "key20": "39VGeNgtUkc1PohNgoN1hek8w4uhruntzeDGzCkC2u5ccj8EtQPLNBSoW2DMrxjksWjQbFnNJCZ3LXfm4Hj6f2AC",
  "key21": "4GVgGoEiEbfYroVS1cGGYmPvY3WzfCXNcFJWXSNr3cemGFwGmGbV9191H6pVXtsCh8wdirqxPRJKjrLnp6AaVHUd",
  "key22": "3mQm68wjEHrpjpTNYmmeHUfeD9jrVWjRd1bkKQyr8PpgjHgtGb3wasUd1Gr8WvKCodHufXqiBMGaYJ26TqnzpE6B",
  "key23": "4FEkaMcxNLcMBQzUyGbGKhqcPcnLGAqXsjwB6JqaoDCzWMnGN8RKJCLyVmGEieRC7HuqdP2JRR5npej7EoY2vfkn",
  "key24": "5BZ2U2ZwhNaFXuCdYwfYq1i264MeiHNhgnMFXTixPTnh5rUiUEUjn9VUHpfZJZdsoDXEzRPpwAZxbg7ezpTeKC5M",
  "key25": "zToSrJ9Z9kSsti5Bq8cXrUNxA4TQTjmh8DdCvpMBcrxT2N3v4WBcdPfjKs3ac97yi5hJrVnBaiAdDBP4rU4Qw2B",
  "key26": "3JRikCCFGKzeSdTFqpfkBmFsF3vDQBhjFBwDEzCKFGNurks3rz2aWQVAVpxLPPG84bUNSAoS7dP63anPwUAKvti3",
  "key27": "5YMAKVqMmhsB1bH5dAauZhmowbDqxaLX4aaPuNC1kA1P2VtPGKGqMQXTHvaRdCwyzdYnZby51dUyJcqhgynXvakc",
  "key28": "nfz7FFNu3HDKrfRYDcJsH5iE4NT9t66fQBx5tzYwhW5iWXt5oZXbJihS2uXu5S7tmhp3dNbrQMg8hvFzbEDXnx5",
  "key29": "cgeESWhQBg1s8wdSLnQQbbY3KP1D99AavDhUFwFe2D44UcxCgCrvLPGE3WaVSNmb1E1UxCUnYf3ZNuMjWiDRrRn",
  "key30": "9NczTEJBHWadJ64ktusYFfDXa1CzZ2HeorWDuxDJHFpRxzvhbomQ4Uqkeqt9ChLJjVQUGofBUCVvchRNDJvJP5v"
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

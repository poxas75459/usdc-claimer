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
    "4hCY67b4NeGXpx1g2HKJs21CfTgLfVmLaYgWdtVe56YZXQ8yAeRWWQ7khDd1juJbnTVurNpHze7zP5NsU1sVsLwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QSxfCAuo598FK2dz12LvQUczZJo8CA2VURKsHMTYQZRCL8VQpi71r1386krLPRPApvZ3f7PbdvVvQkR7nqeJyjq",
  "key1": "4JZuFk8oC5iNZj4x1DSAfHnBqbK3h993AD63G3dc9TWYNaFmZSaYWK6ppTKiDYveZTxMPfYFwq2A1ETuVcDnV6gQ",
  "key2": "5iUi1cYPG1MMTRT22FbqTw2EeneFES8v47aFTRuyhh9bBRHqMuLpHU2AFFBMWnnxQafLkdeqKHZi2UBvWmhGxBEN",
  "key3": "2o8jFsJWomjsZ7G74usx6uckMbRvUPEByPNV1nghgKaXp4jDLpXaUnmdkSvLRdG2ixBab5iZLZMREY3r2LDe3qWK",
  "key4": "4soSLKwuifqNpGoS4WkAvp9FDnrpEQJMNyKTcFuF6GJvqiCt9WJi6yQncj637KBibHWMjYhJeKJLoSTKLQ38uSgT",
  "key5": "5y6aKkLFPT3GXavhQaL5WHTTGMGUqTcBZdBZTgrU6rfiPs4UVukRJo88EZtBwgTZvMtTAeiGdETJ6ugCWit3s1fL",
  "key6": "3gogb1NmzGehJ2vCKTX9ziiuc8ZPSmNrsZ9ECS6VgG4Vrjs5G4NzeESZAV96hZvwHB53tEJXY7ET8BHEUW3NJJ7M",
  "key7": "3HmXDf5Tbpavacqz7LKqZkJJSvAzeB1PNRXaeK7HuZXwif9vdwMJ7w1K5AS7HeU9bjf8uN8qmRxAFgT63emYvV2M",
  "key8": "3WjPM79s7ydr4G919XFacpT8AHT74n2LLr3vgfvugi6aKHqR6sZ8c8JAoSVM8g9kbSEXtAaaYBaALsTsf46xbZYg",
  "key9": "5TXLcg5SPJfE7rkHBWJ4BTaHQEAKbmgEjgP8J18Ca3n6UAbW7xBNQzi15s5dgTxp7UCfrQtWcSHH3QwutqRGf3B5",
  "key10": "27xoyzb7mexJRLWivM2sG1RufRFZwT6i2sVj9h3jQTMeJEg6N3c9uatc6t4pxvCqno1hCyhNbT8T6hmeEB6Q3M1b",
  "key11": "2XnJL1LfVvTYkx3FHdwUE9GB2D3gqgw1z6vgk9yLpRB7137QXr3oz2N6uPMWyhqcfHCDeu2cGqFZ8We6gUvxCP4C",
  "key12": "4gsge3iZRXMoX9BCNpKb72QkhAs92TtZsaX1A6ENq4qzFv8zufeH6JjxwpaCxma5eaE3xifay17SsuQHSjMFaujU",
  "key13": "3gXfzdCsyCuvn4HuBk2efkYzx38JHTTZHMoE6fwv4oL4KAd1hp319B5feftQrVArqc4fmmuspaDtLuDyjWKCHsyg",
  "key14": "5q61AAUNtGaEvEze8Sbdryz1GzYicRwPTi2dixTUgvnj4DLEPgGWYdRuMH5TtVxJWmLaNE52JskKPcNXY3jfDiJw",
  "key15": "32UT5ub9S8xu2W2W1SJ5mx6KzxCKLgvWiCRqyp4BamtxGqjC1CnQ6cPsc53AzveYyoRXvGeP8X6R7S1rqhLEmG34",
  "key16": "5e5viS6RfahEc5YUDDz3BQtm7LmBHz6cxZtukYX6m1kND8tkzgrrKiDZof8D3oVj7Br4feCwcZFe9hbxRZeHXhJt",
  "key17": "4vjXC5juPGDMChn6U6aDJdkfYoygUzLbiQWvo3baqoKJZUJgrfqWwRSZ15KHL3w6ti52WDdnJt3xjqtvgr3H6mXC",
  "key18": "2pUxPpWA12R7oVixGX7TEeizCjgsuDPTFNBBSfDzJBxpkiRxqZ6sCxhEkWD6BAR15orpbRkThpX2VhqNMyupsS1Y",
  "key19": "5nFRYvkTzgVb1GQZchZFYEpCW1w9KZsfuvqhHVJij6tdtzaYXrWVrAJQZb2VA8kS7yEPrBXbjAQ3NeV9UkCKgtyZ",
  "key20": "49e9YdsVRP2BUn7CAm1UXfGgvbF3pL33U2MEU1vv73RcEP8AnRD5Y9JiPWGdXHD5t9J2CTQijkStzY5Ajc7bBUBv",
  "key21": "5HczN6QAZLqDuQ9MMjmLiCeGfczKyyydwKJ6rGGKCJNLWk9j55sfejzKVDxHZte8gAhMErXsgDHE9i3eqvN6AjTb",
  "key22": "4VGS1BpfuQEEa1p5feon5saWSfbX7vb9SkPt9zuaHDsq79j9LVcmagLJcbt6XySAnf9JowifZ6DhbrXwFKjsLjwe",
  "key23": "2v97KsuqCMZxHgns8Hb2ibYkkEsVpjwsJ2SjmTgxWMFoPgH8ZTHmVNBvFJuEs8mFUkYa4fM6C6ksJQBGreL2EFjY",
  "key24": "5LJB8tBoKB7VNyhaSt2V9YZ5e3jjTSuoQMRdBvh5vPafEKnyqxgUxgV8F2qXC48v96iSmGEHLcLkn4xtzToVi9MU",
  "key25": "66ZpD3ZptrNKqQ1Sh2pySTKqChxST1nvuvhiiUwtW3XgF47BSNatTojDNjgdvkwaLbjqvz9Hd69cBUJAhjvxXnhh",
  "key26": "2Go1eDbfwvZrkK34PV5H1NgjuSv55wppCHfjUw3F9CG65mvPTC873HVVzfdGV6UhtmCWH2vcAVaT6TUZjau95vJu",
  "key27": "3bAYx4GAcP4JjagkQbRPoT9cdMoYAtRGnv9NmEKJsUTU2GnP28PB58ehGDTDs4EXTBUMpifbZioYuNAeNmjxgzdW",
  "key28": "5E4Pa9CowBeHNWKoK3PThz9hejjJxhLdDM4bC5FWinV2UmezMpmDPPHPVCftvPqsYABAA9PERXqRbBjUyHAoUjBM",
  "key29": "4g6j5PEHMtvUbPcpzLuy96wxCFnZHcSqxpvcqSYMtZnwjEGPpY8BwyS6MYQkSzAFT8gLcQaXF4Cfaisp2LsTC1LD",
  "key30": "4BFVBefa3ARxJLHi5MLgyVoGEXdJrr2J1Z18mXS8Ux8Eu9sturKBhqsLUbyB6nckAvGeSn28uY48oHyqrfM8RG5Q",
  "key31": "2pd1tF4mQzqM9YC75J7qLphGH6BYRZna3RUhS1ze82NgHcuDDWbKJoWMSXBLMi7EqEbCG4PX6Vfg81DfYmy1eN3i",
  "key32": "5bfVBZQj2DZno3mqJ8AcPN9GfJwtrgacvxiJg8H6riD6gZvNFAyaVphSgDtd9ZJjxMA1xj56rAVhMy58qdJgAgNL",
  "key33": "2oeFmz5QQ9iV8CACUNB3hka4jkMvMEve8dhSCFrzZufnK9B5RfzTnr8WmDeKMzpdJJADDJtxeBpFtKpn7mfWMVQ3",
  "key34": "3q94Prx8EFthWgQGqyaznPXR82DNp31B4s98efiZQL163vfSNkkeZZuAHReH3QdiBPG3fFouLKWf6o886TuLofNh",
  "key35": "S1FeqYT2tkeCQWoj27cCNUb6PT1woWYXnnmv85ma14PP4eePG8F3Zbue4FmBVTGi4Go4hT1VrFwFHFtsaEzC8D1",
  "key36": "tQRZ2iuM49n6bFPPGQVsq58wUSVYQ5P8qSnMHDxsuXNxGMNMtHtYYn9fm6c8sZmU6QGQ5aZ8BXJUS1fwVJEp2oD",
  "key37": "3fbRJ7GPvhQhQFDG9nBHeY5RjceSEVZNEtXG9MZcdyorckw69ApuVVsySBypvS1KRq2KnDQQXoiqGsX9TqkHawUK"
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

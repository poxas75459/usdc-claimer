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
    "5JHDZyUTTvPewhiPwv5gQjw8gfmg2KBG5FwSGKuS1eiXpqa1foUYqaup8EaFhv16DNL1UDYCFFPm8PZq7FwVK4ne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JsPkdTy6aH4k1aVi3aLQWnSCsjPLaKREtGvecdSpYokyvw15WhETrkagPJtaf1j35ofYDvXaHaTx2DSkvqCYikC",
  "key1": "56Jd1mWWwoePwa7diwa3M6AFqH3Ecp49GPcn1SG3evqbQafyq78P7uyQYzeaXXbCpwTqmB8gVmuEShw6URrT2Ua5",
  "key2": "gtgdeUP6gpnqj3ziympL78XteaKG9xwxKvuHtrBzHFRSSxVLK21tXern5X3GtDitKMd35a65PUGoHbyDqLvWUa1",
  "key3": "2etsFnsGvU1vihYxYedE7dm9v4Cpf3Y9uUsKJn3qmX7xnpHKLP6gYtv644p3tyFVh5ZiiUPc91r7Fg561wrqMi4h",
  "key4": "Wnp1ZG5C895LiHdXkUFheiNAUYcDBY7rcxAJpeu78sZuoLN2ZZmNygXVwUhsMFV1DGdTwLSEZ2zBWj6D1QaGaSd",
  "key5": "3EotXHwshiexTAc3GQ5x5zQ1ZfrtQzY1Dn6z7pzmZkLTaR65AfjbkfYLVZrnFua17Jk4bB1nbAoZbejZUcTXhEE1",
  "key6": "5Jct7kpqLqVak26vRKhsEPMjrY69ZsaYRKBM5jWAXAyXszXLqHuTxgvr3oZVdmvhYZtv3GtVkdJALjkwmoyASgJ",
  "key7": "5ncLr8gjPffk4QqxUxV7CwQCvhbsoYo5p79oqm9gC2TrAbSqH5LN6PSJn1hNEqwYKaiZcV2LVesiLopS12vEVPy9",
  "key8": "3k4Ev2K67Zp6BnYcpAWgzaoahFfPBSRqbgnxJLN3kbDb2UyzurLByYLQDpQg9AA3a5RBuk4KbN8sAXsB3VobaNhp",
  "key9": "2vMdTYnpGPug8rFwRSPXZ4RxAJERKvYuH3vFxpKGfhe3LWfdFNfpCXsg9skshKxtzyiHCymKPa8HkkWxJ1PTnm2G",
  "key10": "iaYAeHwcSaVHuT8TeXdqMNFQwRYEXMqWPFfdW9Z2DpZ4GwTUHbUijWSpMvT23qQFeWFb3UmABaRPr3RjJMJyrrF",
  "key11": "2TjWcBGXJoginQLKocFDXkKv6mCbz4LkbdHbELkXvkpR32ummKntnWPafrnHRsy57pgFfbu5Gk7SxvDuF1chjMg5",
  "key12": "2mj7ZBZBsVR1cCq3vPJgesC6XoaU2rXwQ4AHwhMDHQfJwEgkq92HFrT6WCHLvy4VwBd2ijcgq6VosVmSphyeq5uf",
  "key13": "4HAJ5MzX8roXnUSdj5BW2F63VBfdHKYAybsU4SqWMRaUtCGjBxAXhnJ2tS34qSZVBsVNeUaQ5JZidpTcQJ1ccQki",
  "key14": "5X58mu2jJAnQMW63MNB5iWW5KjYZqLM53nrTjZanXLDHnUoMZMUAQUtVYJ3d3CGVk9iQQMvsRPzZULG7wtJ84Qyo",
  "key15": "3rySdhAqWqNVqKxKS74A6jyNeaXHnqo211mXPScrkNcyrGGVUhm3iuxv1ZLKQem61ZvbJPDG8VjBm2yKZ9TMYD6v",
  "key16": "hxmzq9sWKJRDhVqJ4bZfSRZAaYThz9XYacvpy4KQF4ZFWxV9gmY2i2aZ7EAsBJrEv1mLmPXYqagnUn9dsD7R9Cb",
  "key17": "4tzVt7ueyMFQN4sXuEzcQFuhDEejLKeKLr7m8GFkuDoJhtXKfxAYuQGdP8VfKobZem1ZLZme5xt3XgrsjiCXCFT8",
  "key18": "2u6jA6TT7sjztpz5mD4uRfpcLaTaqrcCWPJNtE5kyPv8y4wiHS3ZM9K5QFUH5UgX7m3Y6h62RmoBuQzQEyhoHMga",
  "key19": "ZTyz2EZPETFUJASFjjUAFbYL4QGmSRiZtQd7aDcP1YMuxHbkg7idrgfFwLANgLboUZpvfgJpqe7grtqNacmhHC8",
  "key20": "58G59nyYB6yVarEF4LSDsqrmjzEPke8JxPFiwofpv2aXtjV2pG9cXYUePmJTinevU28rKrfujUjqKzpQDuAkXueu",
  "key21": "2wagnG4eVzpmz3rvsnoMThYe2N2EoAmHzHAKDgtfsd41C9Q3d5C954vVAiT4pC8JntaD2zpSDggJdkkJk8w5TYY2",
  "key22": "kJtVHagg3MEGBQA7NdiSr6duKgsKviAyYMnkbn2LYiDSauTMwpkwygYqjzcbEoqDF45t88deDN94bUxqSV7SRca",
  "key23": "2KEtqruPZ3QPebVEJxXmnWj5Q9zcK9x8EYReTMRDx2rFYKLfvqEHqHTccXvWfP1ZDS6hb5KfsEu2nWtu13UaE33C",
  "key24": "5ogLeoafeWrUfniKbnuNrx2wqa8aPo2jj2ReTy1Te5eX6pH4HkaeSQMjUiLNfMeZLLzDyMPePTau2XSYGzAgEkux",
  "key25": "2BazL7HkVdj7kf1w5fv9zaDrKRLMFUSemoqbUzJGUgtKhwHbYxKYkh132Ynzo26akJRezd1HLKtLHvQycEUGbCiV",
  "key26": "57s3H6XDc3qepxHucURYL9njp33MvUHSdPzCxVi22hhZAH9V8JkrDQoBjLWL2Ye8S1WtFAXfCjr7ngFhFe7eB9o2",
  "key27": "WUn34onCxHv3aKHT915NDdihHJdaSdEMYZDFg8mZMDo7YMaR72hPoaGhcLmmPY61dBot2PPtBvG7gkZQAGunohT",
  "key28": "5LNHLygSBkwGgGTPAAccjU6857mWqyemUSxvvWyxGt43233WRj23Eu256tA4kfNDDBoeVb4xtYYUJ54MBJbnZUH2",
  "key29": "28MDoMWQDGpTr2C5LiuWzYqa3TzRSzNLJ1cCcfQgqAjLShcbYcYq62CnR7eRiwU8drszUTZEe6KaV2g6PWq3KD28",
  "key30": "15fffuRhcTZTAbMxkGmcRp4feiSkGikT6QU3fGjY3wfxL8zzXNF4NssELUPVEM2jKqyTohHpoEQrEW8K8cvuunH",
  "key31": "irLiHNqPbTaFn8Tz887KowtXDGFifCb5fTn4Abua6T7MTENif5eWpg43BHAKsxEAugGEjJuMZJ391kBLEhnnwYC",
  "key32": "48ohsCwJ9ksXyUP6Qhk7Pco5qV3gCSWmdadMkzFTrkoMu4qjSXCgHAgTmq9Q5EnKSHmEmsLvWbfvHnAUn5MYL1do",
  "key33": "3XFSH6KUnNMa6ceUmp7jTRd22EvWEASM8H72fEuaF8LxCAm5cig47qV5dwuRjGDHrcVJ7GcNuJRgPsvYoEeU9nhk"
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

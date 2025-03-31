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
    "2wEoc19ngkjcPXm9NKUKScRA6UyTep7Zxn21VX3veXTzW418NZvjzpBv7LtYAAbj4nWitcjUxrkVuxCyZjxpe63F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YPiXyGkb8k6GmtLC6JLkiynYF7KdxaCNnuS3jgZiLEC5p9hMxRY2ASR2zwrrQkEjauuqc4S54sJkuesmcTJg298",
  "key1": "33fH629hL5BgHEiWRf8hNEuv9ZGEWtqU26jnGDKqidTuAeUR3fspawxsniN1EJgoW8CLuvwk2Ljn1iRvEwmbdMU6",
  "key2": "3357dndgSAHrHvDcR6zVQNbCSU2uzwg7dbo42JXqQ6aut3MW7TH4nxUiGZxb6y4BntTsQSz6T24qynp714hvYQgP",
  "key3": "hYiCDakVCCEaZbHW8v9Th955xddqRdo9pu5QPm26opdtHzwVdY8xRUAtXHVHtZxKmWG6YQNcdYBm7fBDHdCkThn",
  "key4": "3SkK4PZHW1aH6BT78pPxVjxyZJCqXurJPaCWtkjUwRwRYmCZjxPEmwfdSVnhn4WTVKX2ouAmEbzKDHPLYEqtmFEQ",
  "key5": "zjmDQg4QJT79ShdEFy7U9GvGDQRzsnu4AS92xCdXuc2tsjViLPiRKbhETCAjiBrLLMS9uZycPhWn7EhygBAqn9v",
  "key6": "5TtskWaUS46UFqr95mxda9pyNsrstrKgsajhwXPTALyDT4BtqJKHnNvbZVQsGTnwyzFYGThzxnVquW5iMTByC1e9",
  "key7": "3dz4L9VSUwGZRsQxZVC4GqZUHdEmFJFFcjRr23EtT5PGgr8psh74uvEyiSq2ajMqkVrHkBZmkNAmDesXdna7DJXS",
  "key8": "n7uwRRiFny8LWRqDqPGkkzoaCKGazBoMzr1hkgTohzPoh4eXDnGeqUmjDvH2JoZgY8TuKWyUk18SVsYJen1He2G",
  "key9": "363jc4bn9pgY1xtKUsvPpLHqU2mQhT9ZmDiJFfYHQuC5uNDM9u9P4DMQLLPCFZ9dezrENis4KKEcMVrUC3etYaNR",
  "key10": "e9REAA1tJVH2DqtiUDm9b6WdS5Mw1ez18m65iyW7hYCvHTgiKQkFhso4TZUqnUMRfSFRRoB4aoazMbwkCkzoD2r",
  "key11": "RQakmRttzWLYfhm22vdxB21eXWDX9jxgZbcWVpXYcNpqUG9hvFGE4jEwdx49ThLauDGZVGNLVD1nmaE7hU9zLgP",
  "key12": "24GeZDWxpiv1GKN5GniqEqg2gYxS4KtfoyWQ75kLRkGcLLnQr4umbBEz7JAS8DX8wiZijN575emf1noLeqFTrtau",
  "key13": "UiHxH2ssrTz7YFSpwCwDX9FXFGz1mThw7JFwGccPpGXDX5u5LzeSwcZgg1tqitHZYM88pgYnEYfrVr3gzyFN7L7",
  "key14": "25WbX3gUPSQiAwLC53bjJxn5VtWY8LgM4aYPMPAomMF26gV8h9RWagBz25hmaVqBwdNYM6hbcrdBDqx4RiEk5KwR",
  "key15": "5xkv1TsEXTk23Ert6Mh9MZz2xFYhq7bDVko7PYtdoPdzogR68c9SH8uTD6C9zT1nyTk74SAEQMon19ja6XJzkDT4",
  "key16": "4HaZViqB6cj5eu8mP3sY2RUNx2y7GoaUYbuGKVJjgP1KLX4XQrW7WimQxaZAntDkHnqYgyjPrkwBscXapB4byEmu",
  "key17": "3GJLEVKDt3YticMz4qFiJGx3FjRQS2P62hLA8vpf4dcd2Z3ZS2YfQ2Jau2A43FGLeg66GEANNVf1iUsfgrtF86tA",
  "key18": "62VEtjrsq7F4YpWWEizSiNbW1rDFvuaVvYVQGsjZRfviUNfgyPEqtozB14CZFzJ4hnozvoim9fCc3fDMbXeFwNp",
  "key19": "HdTz8eML495fMjs1Vfgo48KZHMc8Q9XugML7uKhdgJW7LBkmGxoKNd7YYqzPkfix3nhRYiD3im95tH88Do5XKEd",
  "key20": "36p6jpESrsS5N6Wa2HV5D1x8PwnaZ2UHoRFWefDm9vDj9ACwMec76NR4jZ2C98Z89UCnFmBC2FHknRR2nkvq6khJ",
  "key21": "3WCiZXhcbGpH7ua4G9QEAh9xugMDMkHaRELJeMFSkN51STdAJkQ4ip6gsP8GcRQfV7bTkbAxrKAvnjRwdruQdvFw",
  "key22": "SMEoY4zWSDJw7sVTrJ4NUJk6fDGoMeBJkiLqvgt8KKoKSh7G1h72N8SrfRoSCCGYbrH6msicjAPXq1TU9vT5hqi",
  "key23": "dDFVU9z7XCK3toEEwQucXxiv5VQ4YSBPtYByHuEcHcfd6cQLh8LXWev75xbwNF7JY9J5a21VGMXfMDSspGkRQoL",
  "key24": "2E8NEUzBZv2xPWBsaZVWgGKjN63p5DULF1begPv4rvxq2CMpUTh7fcS7eAJmPwXSkf3VEZAmizsAoe9CUbzqqTXe",
  "key25": "5SFmiydCFtf7Wz658cBXuDowVV41mHM8LuCbpeuxTxAirkWZ46s9fiyBci13M7oDzth4zpwJ26V8sJAyeGk662eS",
  "key26": "3jFTbmFrqDYk5pqRPekpCknid7GqFJDSF9ArMPK9NtBzccCWGAiNuLEhwFgTYzWm2YwvY1k9zW74drhGWaRmFrGm",
  "key27": "3wAJ6JE5cGdEbMggYDiA6VcMrNYppgnTumw87gktgsCQBMRyZv2SL8azHPrEBMZjxEDugmExoEcGPZcmnRAAtZGa",
  "key28": "3H7fPgM4CGqvPJr9YKB8TFsXN33n3YfdavteLSSAhQNRaEVkwJT9VkC3r5hapeTHAV8zPB9E8ENyngdE8Yq8gcmr",
  "key29": "3GzCoihj3y1pnPubAQGfAUf56XUqKN6WDCNaCzDU9rsjcoaQa97oEKmnA3xyi84UCKzMVANreVR2PFbCQ4BVDDto",
  "key30": "4u962ajKzFsiJ9BBP7sZ1XeedimZXFSwN9vjpZd15grtanKEUGNzes1a6iCxiNCC462DMuKMy9MWjudb2zdxy5eJ",
  "key31": "4YSREiukQb6JQqyZreFLJuqyB3JAJRz1XFjL8yuLxWAK1uUT27qTnRCGiNr4HTpTJY3sPVQCADfLoSTWVpyhbN6E",
  "key32": "5GxMTHEJeFGKbD1Lu9MDKe8twg3DkPrZQh6AgJPa3w5Cn6eYuKtEKGBaJnHozZnKD6aC5pAuzYL9cnCpjfsnb5n6",
  "key33": "bM7wNZa134rW9tujmbb1tV1SzuoKGdtohpsbMg1JQ9jwA2zy5Nwo4rtBoYhDwaBHcNLKE5VJXGXgobTTspSZn1N",
  "key34": "4P981CBtLD2xn3jYkvVtFzzyEicQWpBmM4p2HTWns6guKk1gaEuwfWEhxfMz3YMyH78mhEie8LEEzhcHWBrQ3yRs",
  "key35": "enutZPeWadwoHFNnJhXHfQFugopMre3WTodskkRUC2M4Gvkpysf6Rz4o6T8B3avDArQ57wtvJYsjiAUvDGfbYsS",
  "key36": "2GMm1p61oSeLrsdCdgR2Wt7NJz3PNzkRBXWaswzPwQfyG6v3gdDGiWwyS1iu1e6XpXy8C1s9KEG1vvLkvBP1Yr5G",
  "key37": "2krQZTg5SxZrcjHHA85hxsqqTsVZr1XMtyRBjggKiD4sQUQvRu4xnNi8UCEor7V3Zctor4NvUzLHXZ6BfTmW2mi5",
  "key38": "3dbDuSDkfXXFQmRYXYobxg6s74sh5u6BgQQYZQLtEeWGusZbaoJbCu8bcgWsg2oXJSAxYsfXgioD6TQzp3xBUjvt",
  "key39": "Hdx1HfTcUoeBk2Z3nEGLPz6r9PLoAj52AiUGJUjNSEkJCBPWZoFnyaeepoRdzvMs6FYbtDTqxSMYGAffj4Xy4Se",
  "key40": "buGy47AXLQnN6syZmH8uBJBm8wMUgeEtEaYSyFEfx1ndzqK4U7NMqQfHbGtuiNkgUS8gMNhZgpuy6nxvWPHP9xC",
  "key41": "47ousKeYwMkpFfEoajdanP57YtPiproHECY2nfcaYfgW2AojBGeckCn8DdW7smLoWG6NLvvPp4H1WaGGfrsHqFRU",
  "key42": "3icbkGVynGuZkrNkfhmvmRCQFE2JYKSHb8cUua6NED7MbYpuFEhujgXTeMNLAPruMfJU6dQa2vtw4z81rGAMT7gw",
  "key43": "5eKhoc2Ug97WrmCx3vctUQMwqnAECqbZNmv8os5Wt5c82AK8NjF1Qqtm22uu4THHCD9bWrGScYJAAGACrJkNTNdP",
  "key44": "gbzwNfthhMv99UvfhHtwDoRyky3MWmhkKNVMcmCYXeDxythRRJ9AxoBymaZw9Cu86dxYYgsqrB39snfArq3DYdx",
  "key45": "3kgULG2GcouBfupuVDJmCTqFFQqrKKBBu5bUEgqfgxeS3Vc1LQnKoePVf43XAmX6jBv2Wig14nJXitcJbKj8g53",
  "key46": "24FWw25dqrcnh4ZhTRLERkkFQ4onjaTHSwkYVspSNjK5zMqyZAuUbsLiTAKsNrPqVtFS4mZeMrG8ecbU85kmLrjX",
  "key47": "3dv8hTqDSC791qjM8CrwocBTRaKh5nACMyku6tmW9t3eZ9BRkojXxRG4DVZjvTziRsQ8GuGhFBw9CwkDGhBQf9M3"
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

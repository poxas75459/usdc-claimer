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
    "4Kb4BU8wM7i9x8tS1DmD3zmSUL9G4FcrhmANeVXpQHXZBE9C81p1D3nfbsckDTMQiruAhwBDeQ8UxiBThFpj9fW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41kV5Eh6jqJgjRYfX7DCjYavdQUZcBCngdksZ7Fpnr6nVJArzP77cVQpzByveJZYSuw9nyrztNZSbwTWynr4Ko5e",
  "key1": "2wVSsW9fgN9VxVphPNNMpnQSqfvHCyTw56szupgpehuy6GQ16WSnGWGBPgfCUTV3C9eeRxr5UavHH1c73VLGRFd",
  "key2": "4arnYPsM945JZxz4bPP82kwGCEgGMfx6dkds5iwMDSMrrfZ9La5fNncdjkwhZFsEVLtCp3S3teQvVZHHpv6uFrdC",
  "key3": "3pbejGDj8QyBJfiX4wiLZ4kwVv7y8RwRbvjVrHfgBZZCJ1e4mqssuXzCDc8Ay6V55Z55LWuVMUdzhxQKgpfjqLyJ",
  "key4": "4gQbvgpvRJvoMYi4SvWq9B9jQqwxsqPnePvqKRG2tVrFUoxfbtARRqYvhFappS1xiFukHjuJ33ux2vi7eyv8orYm",
  "key5": "5u6kVFnS484xUDaydZ3q5XXXTmJQvJMeb6oJ8FeY3GDjq6soMxzBuU5CG4P3V9r5usgcfGXd3GeD5JEMup3ZknX8",
  "key6": "25choKM11NWeHy8yKwt3MZAMmLFBnQyBvTjB74tPVnKVq2qkWGnyTsogySQNSzXXnQWu8dFpVfzo4ns1eNGQ5uYJ",
  "key7": "5eJt2VudDhAELvtgb67MqhCnS3b1JMWX8JqEPWFxsE8RUicY2ff9F7KXf7B4yK4Eivm8kjLJCDgNZA5iALpLN6Rp",
  "key8": "2Vv14LnMPdQzLCnmJvGUrt8zf4oAM4PuLijqtKtmRFrsG3TD845F6aTJD33CyPPPKZhhW6j7fPagYadXoeHxTAex",
  "key9": "Y513oQvEC1ZfXQz7WE8t7WZWJ9aizhk3PKVGCdmoWQKDP3K2KzKDWp7N7ycvuR18y1rxFGySTWmHKJPA9nuSFVW",
  "key10": "5QULcja2FsUNuspKPjFoyiaKHTs4Go2nMtsHN3RDEnVvDZwdtynB8DsCMmqaFrR5rzs1RkdhxU9qefaDpKBBJjUL",
  "key11": "5GcDJEEAPwuaGvxvASTHjXg2cQCz5c5asLd2189EoLMj7z2Wp5bMY8NJdCo8gwg2Ve8bm72g1qnZHBaw63uRyYGq",
  "key12": "f6MopA3mtP4mG8QygYkg1JFHr4hTFrNVps1DxuD29ELFxACBjdxRD8HhcVhHLFJEJ7zRpzMtCMGWxhoAjxKknkU",
  "key13": "4THFxwVxHRLWvPtPHCXjyytm7CCVmSgpM3bwGHU7TJX2VosFLss8NBgD8LLyVnFZPRkZanNfMoAn882ApzQMQrEk",
  "key14": "4Wi2idkVKBbMQMFjRsH2n7xnCF2nu1oisGAUZ46mDJn4xzweQrE2vStGkU9p2KCy2u4C96H4UAWjy4UpMTnLts2q",
  "key15": "jcf2axp16tf9NF8LBY2BZrNzXFgBCP864uYMyBTN7QrEWMves66d2wNWnPB3YGZ6f7Dt3eBo6qh7UaEkvJePU5k",
  "key16": "3Dnz2f7sm8jrfmHcZwHuHeZmJFXLNMzs7CzZw4ZqESqfFgZ7rPe5axFwoskZRbSoby3cSZgBKXfYFbxvSKm36soP",
  "key17": "7zCe2CTZzXvBYhBufWpCcTrWb3mXo6c9Sp7aj2j3ymXFMzhHZGtHnvpYcx2M4tSeGszkaaPj94dUMZ7M8oPMvE5",
  "key18": "PjrBa11zBU9MDaA1cRkPMuqpG9a3U42vMYrKGBaVYc7jV5wVcFZvv4fhXBzA87KhePWT8CVhfcMToz5fCwe1Pof",
  "key19": "5jqAPy2nokHAHDPZT8tkvRtyA7S2W1dpzEYVMLW8fKaL4S3Gq1j8xweWxXjp6QKm2wXMRWttdUNcPPwGjUaB11Gt",
  "key20": "3swCt9jJhnGqJJybHNcq2kAk5FAsiqA94GTWq4JBApo66JQWhx5jcgTLppaHpgi38KiSG5FiQNbhNRkfK1mpEkKr",
  "key21": "43RNos32WpaxU43tUazQvXKAnWxULnzc9RoWtccqMErcA1Bw1FyZGh7iH6nAtcMz17JXnQfzSqBihHH34CqbQRmu",
  "key22": "2Cwefop57N7KGgQPQkH5rtdwQNzNhcZtvGTkn1pkP4SqTRkmvJxeoiWYAgi2XCTnM2VD7WAVg3WhKN4VAnubyzGa",
  "key23": "5K6n65qDwF9sRnPxdBCpSgnxxK4C3S9JicuMEcAcQwzDS7MZcGWPN3pxUihF14sUqGgmJ8XEyp3jZo4pYechac9t",
  "key24": "K7fKVSfk3jerhaWUm3atntNs2gi8tBse38rqKax4DU7wvGLHRJQVvwpCeJJzkMn4LMYj6tSyoCoG4qK3f6kJ2N6",
  "key25": "5hSBNfmL7FdQ7LuaadaT7fEkg93XjbwGTWmcKDVC3rNKoyJ86hLKuYRj5ceATbgvwRPcKuWfZbT4xTXSpeCyp7RK",
  "key26": "3NDYkiEGt4sdCPhTTQ1MrSgfZjLvz7cwimzbhPGDembn5JZJX74BWddr7DUw9GRUJVgqbuEeZs3uJ6FyicpZD6FT",
  "key27": "4tZ31E9VV5rTDRZBTA6zCkRZgGcBPt2ydLxZqE21XWkSY6FU8FYCQcNwEQYZRD8adrbzc9jxS8Dvx2pmSipna5FX",
  "key28": "67j3tkSRWh9yasxJFQN3fgYUWiHLymWNSTLev9CL9cphSe8eyGDBwTA98oy75KibPczmzcWE2v7gXoGbBXE15oYx",
  "key29": "3itDQfNbYNUm7sTZ1Fw37qxySVpnREo2EkesqwaXRmvp55S387LzEHPtz96wsQijxuXr64dFqpC2kQpxaWi5kCRv",
  "key30": "2Xwk3WKjFHSPQckuF3aTyZZAamQ8krtTiNF7xKUUAZ73UijvA4kTiLEe1tnL56Q3vrRWk6XfSLk1Wn9wZmgYb7qZ",
  "key31": "3a9MJjLYpQvFc1WUc7wcHkcJVh1huZTVA7dZgXGjyxDUfn4DBkEAW3FSBMbV8DVL1byYD2YkumKD5V73Q5NVuZus",
  "key32": "67pwEshkED3ECvr3HMTz5iHQ85rPdhtFsNiitbRFLx7FdVfVgS2NuR6qi1JuE5vVKGCqPRvUwaXR6MDQR9Vw8oXN",
  "key33": "5gg3FZqU379AnU6e9Pz14fAvowqq9k2YFcrZGyihQAXVSN6dokSM4GG44vKWqHopLmUqwTehFybjXuJP48ZyZ5dM",
  "key34": "5v7C7gAjjyyJejFL1XeZhtXAqkti1Qod9VX2Zvrji9PL8dd23MYtCmchuzdc5evuNnTv1GVFqJ6Tavi25pW7VMAd",
  "key35": "9mutAAKXn3CeaEaoLRmx8k54SeSjDFg6x3H8MvFAWidnFgxznAseYuXLcmgxzLDYjKtoN4U5WmYy379C48WKDtp",
  "key36": "5zBt7RQiMfUh5CyxDBRK6HMk5oheAY4w4CFmYhhKKtidYH2SztZJ2ihdok2AN3qGEUQtVHHCeL9s6eEZ3pvW9Q9i",
  "key37": "Ka9DHFXjsEgtQ79K1TpsjvBppepHseV6un3TEmJa7gof2NN81TV2j6RbRbmKL1G5v7tEuBEpQrhNCXNhrP13sXa",
  "key38": "kKaew2kvz2wWcCsZ6fa3dy1S3XnvYcA5rNzCoDfHvND7U2Pwf1jWdmHKnLTywDn1j8wEJ3te7TbJCQ1DxBmiixG",
  "key39": "2kgrbpB2Am3zPfArz7cjMNG3k66r79UmsLWoydTqFUb8YwqPbcrQsLv4jqLiXziYDtCiL3JvYuJxqH9bRTLUogTo",
  "key40": "5jSsoJEY8tihEKAm3ww51Q8y6rWiQs1ziuG2SnycGQ21gTGVRv5X6pvSD7UUeFuyyG3oQ73kV8pnF5WSGaa5h5ee",
  "key41": "53d8K7tQGKX7QcSTCCqrvmmjyisDoLZgyeFMf53EE7GxGxYmrGboHYQWydTSobmBdm6qzzGmRcEg8Uvke7tBMGDa",
  "key42": "C9UKLFutwMvG1iwcG3xvH9uTFWhVTeeiQ2Q4ESBC38y8GgNZGXobmdKpbWAfUdrvU5iQ6X5isRgmEw45L9tDRG2",
  "key43": "2wnVZsvidZhM7JLxqan4FoX5khWuDoMTTkQ8JiQfzdi6yyFc2PbW6DbUrSzM2tnTCLZyAFvwRiisRwXXPh4mr7cj",
  "key44": "2U5nEjHPybTThbfMAJiEumoRkY9WbA2G8AUvCEeeL99SBrN4mukWhDmUxGrxgqQzEhaUUJevJEDskpS7kpiHwn4Z",
  "key45": "4spzkQuV6HmRXGdsdxzFR8HMPT6SnaYc5WSJtrUeze8X4v4gka4n1M7rp4cQbWQ3DTNTbqob5jfu92b8GXT4m7pv",
  "key46": "3LpbRhDHXP1dxvf6kcYbssQUTz3GFMG7L7sswXAWFEQ6HUzkmZCN5ob3CsA81ayU1oy1cT4SaUCW5cJKzRCqUqwN",
  "key47": "4GETLoh57ffwEHtvpRaCtBiRkTLnzU2GSk77aPaaFCYLdnUv57hBhDRyMBSZprHUyBnhDyQoLg2w639rLrSmMuqq"
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

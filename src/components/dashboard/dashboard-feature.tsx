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
    "23zo22ccE8mxHmXdNbxrSPRjaZWXPHDB7HuNqMreB4QtiSksM8hTbHe3Uaynbpq3N2pfrjVoeDDwPMZFZt7GbFwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nazTFgumNkoFBqYiotNvucbtvrz5zx59KA2J8HC8iTE4RC61exq7Sf98yx3nqBy7S8dHkKqj8MDhjw2u4fmbygJ",
  "key1": "4psdbigeqfMNygPu1so1ypkb5KZ1FzAbkKJn7Zgc54yGtvTxqxQN5QCxJX2UJM8ScJADfzTzuBQwxYBEH8ECAt4F",
  "key2": "3yQjzSjgMuQqbJ1fTcAq1jx9jZGyfDGy9YEHNw7J2XBwoLGuTAxajh5e4m9TeE1SYe22mWSN1iKfBK3pfw5ifuuz",
  "key3": "37Xuf8LGTAph3AwDZHNxyQZ8AxQEwtToikSntZbsXCyipXUpYZxB9JFrGR8kFuqPLCxP4Zy2d3XURjpSXDasN9a",
  "key4": "5FDR9aztJmsF7b7aNs6KeQZ1tyL8X1kKL1ZrfJx6h39TRfWKGdQjQC4oenMWxVLD4uXvy5Q2J9yQNCX7JbxEA1Zn",
  "key5": "3T62rVuZmKJkJcQaEiuzWupqHp3jJtT4TnSCDFrnnmMYKYDWfnoW76ejXDCgC1qaAzcWzfbKehm6cWJYF1SP6FLY",
  "key6": "57xMWu4drVzEiupFj42qMvSMN3nKcEv8JTnKWVNLPBjhvLdei4Hf2p2i345uybmNEyQgykpyWnAAj6QT3bDzGe8n",
  "key7": "2TZdxks6pPW7ap8PZpRVZLaJoAB7E1SZYXcsqPQaifsDqPBsRryjHiGagcZb62zhxhcNqx4F1Qi8JhAZqSWs8SJV",
  "key8": "2oM85owZnqErWfmvVYFq5Ltf16xwqgV3TX6daVUotG3XKeaMKwKsR8SbRCegcYPt4XYruhDatGXDPWu4nStmJcad",
  "key9": "N47C3bH6qbs5PiUjHxkpsDbcUEWSfaPZAto2sdquyssqmPUzs2rDCTmiefYH97sq9TobeLACDBZazjNMKi55jB1",
  "key10": "5S6zVoSC1LJ9sbivtTMrsecDVBYiKj1TK6kx6nywqYCmc716KqzD8bQar6LepfHpt52n687SD7REqtVPGByMzEKi",
  "key11": "54xPAtVfYN5SpEp2pCfGDFp5BaHQxZBmu3SBXdaFkAT4nLdyxRyzEmFsiGUd5YYdgKowEkmvHkTguYDFnwfi5urv",
  "key12": "MRtVBEiDmjY6mhF11FWfT4UwiywHZwx7GDVJgSCVL2wJy9ENttbEyszUJPYgrBNpXzUvqf3xyLTTUW6g33TiuBA",
  "key13": "5ktQE2aV75EwM61ioJHvpwftbt7JTrCZxkmmHJEiF1FGnvp61ZWCx1gN9Z5cUhrzoWiFaoid1qMPv3F7sYX2TFbn",
  "key14": "2HDZqaVkesYVJE76SfdANB5PHqrji8MRcZmVjhSAPt9HDELEYXanJ2BDGo8CaHEAkbbcjQg7bhW4zKnX6zXbQhia",
  "key15": "3jHgYNabE3TGNiG6sE9fkhzenGY8jFsNJmwSWrRNaPCCp5b2LixCWVz1TsgB4u4dUAXi4KnsTTbLcTWVy4E6FUqA",
  "key16": "5TXTYc1BBi1xengRFHwPQEic3L8n7tjrbrF5Zoo66YyPvc5ehPkRWyWTtdUbVq2sQmmxcidufPu9tRFQ1HNBrcG4",
  "key17": "32iRUQN8dmdcNwTQSGdAu2ioBsK3cgR4HjoNgcmtPPAFJ4q1uy391rEoMfve9gJCtUDZfY4YpAB1RJbgCugp1cx6",
  "key18": "48iiTLj94GGjzpgt8fSLYBP6vBHD9SRCofMCMvRdAzdik3db1hiZkxhwHGf4zio9BYsoLz75yCUdYrWeh4UCGGzy",
  "key19": "2Np9nvojxRSghXnzYgnTnDhHLwB7LzfALMUWNG2kSpCvtXMiEAdSCC3kukL6JCWdJkxJ956tzMB3R8VZpHnKAN7A",
  "key20": "5x9D7C2svGrK5GhsMipTf17VdY8rGCpojDs4PuWf2BZb7FfwhRFaebdg9agFa6XjHAotsd9TDjPDQBVHm1yn7Sky",
  "key21": "aSjyH3uUFZTSARdids1c25tNsuLFhajb1CjLFJjxSEytL193V99oscGZzwfE6Kt7JPbnkVt9sGi7UUNnF588gRV",
  "key22": "s57akBMexwokv27vLoPzaYLB5RyK57AzXFUB363jrRW79CAsHaFT8fpbjiT1Wc1jc51t3QnzPkdUFqck8rFFcXj",
  "key23": "2XBDT6WiJZ6rN9My4TLPDa12VJpQ8BwvL7pg7rKUH1ezGHcWLZ3gENs9BSQeRWbFtw6scykM4MrVT5fmX1QKKgdX",
  "key24": "3wM8TfrxA99zqLR8wU3ih189EhKv1jnCu3ZDWKdgXgTVrbh8Gg8px6XWrQLdR4GWjBE4ET9WUpEApo8NYBJL7VZa",
  "key25": "oG5SAniaS2s6tmbWSEm3ZrxjULBccJMuYSxWWJ4DiQjuuNLdz7HQyLDCrX3U88qKbw86beviBk3zcDaZ7K7RVgP",
  "key26": "21fyciaMybe2CAZCNzsRZc3dvmQbGkqw99RBwGx1pnK2rUegkfju26yw2kLTCj8hQmVCDoh52wSupLKWWrVZH1tm",
  "key27": "3dNaHyKCianoTeweY1eXpsJjwirfNYkSrg2XFdgMyCaMc4TVLkKbUeUPENmW5rDozWFjB2wAdBTLKogXnQMfCwmK",
  "key28": "5awaAJue7J4BT9iyGmz24KSCjXA9VgAvhhuzaf4fDnbrLmJcVe9ULGkYXssMpJMBdkP7b5NRurJVSd8PzDhkNd8V",
  "key29": "SvxzLxpPSr26MXcv2kXs7ioL7hVS1tkpkGzKLU7oou57CfYsNK3P9hMJ7Eu6RPsA56n1zw5GwRayMi5rGvHo5Ju",
  "key30": "4QczCsqPkfaLbNbH9AtmdmqAUW6t89fzAbxunE35rfuzdgMaE7tBakU8BrB94qDxKEdzX1MRSHPds9DStQSGx37G",
  "key31": "rJP71PdFPrLduu8NDjvfW7zPh7AAs2CX7SwLuhxVChh9F3XvDZ8KXNA5T27MraUpxysrtd1AUkd1hqpcf3S8Gwi",
  "key32": "52HGZxFeHYBuxZiAGGEQGV3ui4jkiPeoDr2dAm56EynEuibo5Nn2F2N9s582aF9xmjgawcktJ54p5SeU5vYajWXh",
  "key33": "DW9MWG8ZTKVLN9fpbcVuaqP77aRnQ6xVSrMawAJgoknq1yRFGe7WodiAAa8maYAhcJqFQX99TVS64zEPS9K9tK3",
  "key34": "5SyBXbHnKpCcrHzui5QqJAJGGgd5jpjnsW5T62PzJxE13RCMEX7HhLT7Rp3RP5vhTK7tmD7AFBePgxLykZXu1UV1",
  "key35": "3zSay1YwTqETroazRtDDPgjqE2aFDa94t4JLhrYAWzTZwhT3xqguPpuRELUs5H5YgH55VJR3CA5AokkxVi7jNgdo",
  "key36": "3WGCjAA2Usvg9gDR1TZJMefFi2ZHY8fRNwWi4ZJY8jzi8Lv9pBdsbeS6EvG76BxYYYyWwFdZzCRqujD6dFLuQhWq",
  "key37": "JZft4Ho8hxysukoeGMZUuaWYmX3hHRX32nAZDcdcGoG8AhtNxH5QxyHq7tbgu7EgWMesKaHdC6KV9GTY1BNvDn6",
  "key38": "3TvxfZVBnjQYSxFKz6vaCvdDokKo2Miyxta2t1j5z12tRPu45ZW81mBfAiFYriTDmdcuRH7EWSrr2P2AXVzY92xc",
  "key39": "EqwFYRytJBKuq4WjEupCc9GFPbVwAqyARSYSNphrM1Ajfyt4jFHneE3QR6hbwfPJVGG2Tqxq4mWSLe88SDHTWKu",
  "key40": "2qMqz7UPdVXfcGnr5c5DSDJCerY5LAPAK36ex2y4FKyH7U3DDb3u6CNgaiLhZpVXYsHSeQq91njYduGVN6etsxG4",
  "key41": "2Db1ysvhxQ6VjgaYhmocw4pdweG61vHHsGNsc4PthXvGwjonjb6xyAKAnYHxLL47FfLqwn3Lcn7ucDjKVdmcLZej",
  "key42": "EEA6Ebwzj7VfdrNQYRxrbMUj2kYq3PEsP9Ug2mkDqtrvsaDrjFNX5toJZNxCh731sad2gxKvWyYcCotE1xCYnbQ",
  "key43": "4VmjVyD3aRYr2Wp9aw6nmx6poZiXMSuXVyh7DCWsDSQ9r8hno3FxyiF3prL9UqjRZvgEV1jUVFPRizjc8tKPWHXo",
  "key44": "4KTwP7XZBNexNkgRM8X5zHAsGMXh17UCeduvXGUqCvf1KVGjDnjoUkz3yNTThZnEEsMnToiQARoZhFTEtvBdwdDB",
  "key45": "66gpKhQf3BHdYNhoSe2SNMtFyJZppRRQZGAVsi2baGALFXPfWWjxeFFiwS7TCabnrYLWMbdXHxx6DCk245BmkM4d"
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

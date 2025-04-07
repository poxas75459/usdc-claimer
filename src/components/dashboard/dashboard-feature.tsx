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
    "5tppgebLhirzj7dQj8Lqp5LoxYTpKFDEW4yHXTq6kGH4ALxdtnadx1Xv9wZYCRidpnbW7bDx6rQJjs6CtXYz1Sc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KAB7NNWeMudmkeYiEwy1Vaa4U5JVsVy6VFHmzYRkFFHrE4xKtMXemU5zev1qL2PVnWQTDYFPrMuhUx1vUgm166Y",
  "key1": "3PyXj7thnERx2YYjA46CqHiN1M6QUGgKMKG5fqRjP4FroSHGrbSSVbXHKjud2R89gMkKrkodWpB922Y5eBbZ63ym",
  "key2": "23XR8SgdkdBtEVvdWfSBmejHjgA3VSfT29gY9uLFDVwKPA3gjtcHB3YKXAtt25SfPUxpu3KYZerJhL8RSLvmc986",
  "key3": "5n4X9qb7YvCvYg23PkRUWKH8UrjnVSnEnrQp49NCprhwFFrXsCXxkKTsSM6x4oWRqwgwSZ4aqXX2RxwuBPDzn8Zp",
  "key4": "4r89NyjkHJmKPcFboFkMjNem18oXV7YeqnJc5GEve7mXManwdoMNAkAQ1uZKkWKLcyvHYmPDp5SkLoekEY4NABht",
  "key5": "266uUyGGStrNRhM4tEyUAitKfig1hHrVJZ7sxsUTm1c6cXWWn5fGkcB2b25VNmCpeS34cYq27SK7eeABYXpqaRDX",
  "key6": "5GVtNjQ9Vx7aEnNwFt3PxMjSKqBnrWQykWqHvg5NLfwHaPS8aVcTfDBY6s9sz2AxgC32b8o3NrYP2Hd6AskVKQDS",
  "key7": "52rGGNo3VnFxtFFNcGvjE3kAqTLMs2SMCaG6CGiutamSJqA9r8bw8pmseK7LEvi5Dx7s8AKMh1pJrtKCyzRkgeqR",
  "key8": "4CeKmM4hL9NScr928qZC71UTmMWtLBf2KNXFaMMUfJdr2hHTuF1KYjJ6zHcGSQtxomX4KYiB7ZzwfoHtLVAyeaEp",
  "key9": "6355N373CWrCkDxds6Dn1Zs3DLXiJPv9ZM23cp5L8kLhuPNyDCKwB8BP481hwnxcuFG2XV3i8Sg2N2amckx1irzF",
  "key10": "4cgaeA1iRTi5zMcZhHhKQPDyxAd7DnYBED3U2gSFCf6tpDTVTUjCKduewmHsfYV2BkuxBT6ghefwCS2NWLqxm8dQ",
  "key11": "i3fzeAbu83NCezF3qURTsXPsiue5XZTdYueo5U6WdETX4G7C56QvE2unAnbi1F44TZkeaqqX6D5JjNN3tuipK16",
  "key12": "sSg5Gdvx31jV67g4wGAquAb13PgWVxoNZXeuPTZ6wfVPcDrWtX8VBBb3bPNpYLT8dJnh2xDrFJb6Ty2dMhViFu1",
  "key13": "668ZdpwA2yBfYriHkNJ9e1PtQhf4iPXcbcnGvT98GZg15bi8Bne4Mi2zqoqGoAUxVJL8m3M4yKQtXnBdTyQk7o9z",
  "key14": "5tHo3miWhXkzumzQwqDyHhewrPZ8wCpZSYKzGk1XqECNvEjq7qKyzq15xUc2jbPMbNFvpCy399n6yiYv5Hrzf2oU",
  "key15": "5YjjzrsMJy3otP6GCGtugbpkr2JCxKwmjUm7zygyun4PXB9EAfcqspp3ZcsM655Y2cJRfZ9tA4p1WCb51aeCv1Rz",
  "key16": "4ye8kghDWyfRkuDjSfYWYN3TCsADSixHy29skspMJXWdecM4h6FV3KnRZTf5QoCtzPBCcN22fgGsjqd4U2xuBFTx",
  "key17": "5qUona5kM2ghcSeauhBsQsj1MnaXaQedfQ6ziThtHgPP2dLUsQQ8UZS1g88ZPGAZccfQ9eyn8q7FvAjDHwf5Ruzf",
  "key18": "5pBrQSh4GZEhW8P1VCohs9pNtDf2o9rc6o4bMNGMc6V4PBzkDdynJoP1RT7n6q5ickBtRCLLi3RW2X8QhEtLEQuG",
  "key19": "2WTzmK5XVsy4mkQ7yod7WNK1SAhSc2ig4rWR2pgt3hQ1Mky8Yq2eb1SgSEEbJw75Vtm5nxZP2cghuZCesNAgq1Xi",
  "key20": "5HcYPMQW4wLWTmYFtPk1SwXyczazpeNsUL9VwmgM346vjGQENX37RCmvejkrpvqGxXqx8UVj46Q2oPMAS6Yb8zd7",
  "key21": "5jZC1rUothPGCZzQadCS1ZZND3qbKWZgWHwwo5oSk9FdRZGezh4ZiinQr9mct5r3REbxHehcYNL6EcvaSgbXxr8y",
  "key22": "qfo4xd6FrbPBd7THuzLq84BosxBri39o45sBF8KM1MNikdmDDAJBskvFVBmjfnwAzHBMwFk884Kgc6TpBzv9rtr",
  "key23": "3k8PfuPKFPqw3N5gZrCvYHySEcJGW9a3gh31pPgjdYq3Q9HfP7kcpMzUAchZ6CSRmfkWW933A16smwbzGUZ7vkeH",
  "key24": "3VAR87b3JhLFX2BSkTKFnNYq7qNFg5E5EENLAvD5g4dD5TvxrivUoeJvcwwVWrVsR3pygozXi1GJyHJBut7pzUdw",
  "key25": "3k61tH3RY8414QpBDfvfTQE4v1kUs3gbMj29zH4sXwJq4EnuFEES3JyGXnu37GzGGxkVpcyhDk3ci3aaH4bJyd8J",
  "key26": "62h4bwcvDNsLVA35SbWvDAvbZiHABu6nVYcgowQCJnNeUKYdu12khUmemGH3z3rpTguw7waktMN12qCHSvuL4noA",
  "key27": "4eSnac4ZKB6hZsdhGHRGNxnzvGEiJurGCoEKCzwJ8Nvx2fVQqvLD5anPEDV4BgAEYPA2SvWA4tEytnoYPXich14z",
  "key28": "3MLrtQ5UdKGCgGjj3EgpuySEXbJd2V2gpiPn6mPoqhitwr26j7K6yQXGS9wVH8LdqDXtfySw2MA6YXsiytqdSVhE",
  "key29": "2GKV5JGgVj2t33gGTEKTJ94JhiYXuVEoQ3GWTfPN9HxM9dPLYQ7gzUqza7jEHDpxSSM4dYJduVvdp7vp8RUdcM2y",
  "key30": "5tipbCz2VVQn7PsDS1hpFwrWDn1KJCdwFmKfr1nUcJVi9UwmtSFTynR2PmeZeibjBy7bBTVHz8XUjox5jfTWYXbm",
  "key31": "5Qhgnsc6SghKRNREvDxUbJos8xjYRFvadZynD1j4Ttw6vCtcS5p2pH8oe7t1n1uJkMKYbr4CxLx7gdU4ZP1Mf89D",
  "key32": "4wj8FYyBGofetBFMTCpy4kgrRXH7Hm1S6SzFAvQy1U423nBx66P7dH3o6z7gQV1U1AbUiPuN7X1PmSGEV9fDB4U9",
  "key33": "5FCg9pJ7JL5ocBzLB5SrbQtmMPn6fNRWfeP5TmzYixS6CBaU9pkuPxKoPBdVMoGra59Y2L7MyLzdPcezbb7VozUX",
  "key34": "rhYPeApQaRgCxXpmSCU6QUG9nxJjtwWdZZh5bWPmdsuh7uu2SZwT9AcnxFfdpSYouPLdMHrhdHasEPUd8gx3Jo6",
  "key35": "2LhJGDDU99Df9fWCDosuA26Qxc69nDBTJDm47N1RSM2oyRvUj5dJcvvEkCL7rjW3qa8dXTof5P1Fb5VZWUyvx4uG",
  "key36": "5gu85j66Z1UNfKXcpE2Jjm9ikVpbZf6ASANv8FtRvnPTsypHCZNXi5oCjUCGwyMTNXBrBpS1zioqEqwC79AgGJbw",
  "key37": "Qq1GTPQdfFcsEPmKbUwbjFCzxxM3r3ZhiJy9yYKgvipfCnBEMGfe3j871HXTkRZhpXcsqpTGDDnw8Ev5ApSgfvc",
  "key38": "3EvEg8mBWYGXZdbWgFWAfJ1xh8qTT1sNkeUNdpLSmmyH7shaM4UxhdJhTd4yTBWwiC5qK2mvLG38BFaWPmodHnXF",
  "key39": "PLWB2YiWHXYcYvt6yUZK5kVg6nHHT7JSTeK3vPYKYkMQFktonk7D1GT9sT41EYzrDDzsDA58rvV8Uuc1caTia5Y",
  "key40": "itCuHQDpBNe9onXBQaered8rzcpSQvgRXF8vyKCnbyu5TeBmUxjcdZca4JD9S2yBsGvFK469rQVxsm7KGwLriw7",
  "key41": "5z9Scc58iDmDixPusjQm9aiZYs5Egaie18d7GbVxnmRdAyRJUc8GhtaMi3yQpfQTPDwK9Mayg8H2HnaJ7eZ2Y7Wz",
  "key42": "5yXyqia498e8fbZQqBJKkemR6nbMn1HSH3fZCVLJzmJ3o56ZBwQeWNwuwtbR8B6NjzLkwWSCtqaYHfUpaSTzLcDx",
  "key43": "4LA4DyfgWXsCdY8G3dT5pYjoTgt9cdJRqg47j9F8B1svhsMZqRvgUsGqDbyrSwsa5xrcW8RpsWpGCHihFVTtFZf1",
  "key44": "SYioCA4DPhYNiaWvhkiSY6TyAT9W6uNSSHgK1FE8uwWWUgwbAEzGBpr15HndfZqkbydh58qoKJ4EjfW8HatCc5y",
  "key45": "3rNxuvfouLJLjGKW3KnaN87KhZhUg9suRRCZrnavnWGQgzi91VJTyu1C9G66jEEftJwZj3L6c3Yz3cHjS8d1diFJ"
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

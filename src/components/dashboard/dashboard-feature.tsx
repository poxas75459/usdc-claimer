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
    "4F21N7QSTLNNuWGytxjCmicw13wHr17Qbo9mPUdPPeEvEQw2Km7o47BZoZn2KNFh2xNtpYGgdnXqTqnZPZCyxd4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gt21kXjA3KcL1BtQYTuKnRgUpRs5GhkNETPzy4VktxJ3NgTUHZLDZRTn3CuAuZpKAFZTccNYFQkfLh76XySDd21",
  "key1": "2r522EVWEUdgaoGyDRKzdzubAQnJ3NLLJ4VyH5S3SHdoJXRRmSnafpwojvHj4jkYsg5ctg1TX7tQdMutBEcDS26B",
  "key2": "39ttUbbmCisiucFMTX5QGhQPo64cz4TJLYRrgfnfS7KXuvFzTSVyaPEJP538VJyUhpD9AqdMGJimGbmS9yU7qwYW",
  "key3": "5kQq4Z1tcJYbJ79up4tU6jDfxEG1EY8sRSx7ZvWGJkAiHeuAd1QzgysxzrdUeKwVY3jgEFLyWRq9ZchbrEnRxMef",
  "key4": "YKywRThoADgVjsw3r1rHD21gCRQyEXTLoN5z8ep2gq4X9rrnJr1wPjpKq9C1wmSykRbbNFTFTGVGrWkDsbw4XNm",
  "key5": "5Gh4x6WNyjAoEypU8zWstzkTe6N2kkQVG75Ja6e64VcnunbFu6v6kKqRKMtTR39dfQ8Ru5M8a5NYvY9hpzRxRiHV",
  "key6": "35qH8sxQzQLeKAjob6s7L9YC3Qhqv4hchm4657jpp2Ci73HXtiBGrJPERY7exqqhzfTYujk1MPfwCqg18ArbDD6U",
  "key7": "2nzYEAkiSnrvTvZph1XszatJ2VC8BNAwgq6bo2RewQbJtQtpVg7JJjbhdqeJjg6TqeBmQyKfEzQqE5k4ekapcvXk",
  "key8": "4iZ4k2Kbz6PpPKfS8w6ph1evPACChUoXFamJTBEP3YsRSEVUE1W58ShuGX1Cx3Hd152PGGNdH2s4S538yryKmBzM",
  "key9": "43V4AC4ELovi5NRCgVmGqAs5Pi2x4w6HHuEoSgqRjuwcNDCsAs5fp9M2MYio8hTBjj52FAodWQrrqgoETz9xK3gN",
  "key10": "5YbDEa65UuTYrPREQ8yLUC7btwj3PDQL52hXeyqQ4GrWBSSdHm5sjfaK7DfoiRjaHS3fPHt728AsavG5C2ppKHe4",
  "key11": "3BkUR1fFvdgB5wi9q1ZQ16kWGLDQMaDr9Ru1vyBcfgHw2RWJx6CMC4rQgPtiFc8ipFEtVw2TH9NRrJZfbakqqBhe",
  "key12": "432zwYTrcqo42rNwUzPMDEbh2uQvjLdBaTVMNz33RzVF2NCdnRjXRSLRznedCJwgoujHQzTHVJEY26LdWpcDivD",
  "key13": "r18GWQxA8gt5QptM49CmDV3j3DzKXwbFmYoevZjhvgH81MwTuhqtAUNuukUwDwW264bk1YU84WtH2jkZSZnK4Ag",
  "key14": "2qKs5ECS6169msMmRGeApB2pBGgdFnGmZKFmPmNswnDnhnP6czm7yUoaJkLADYoKao7d3ZvS5W4FLNiHFwzFCrPW",
  "key15": "5VxNHEc9txnxVimYTt3UuBZ3aQBUnig9zv1CzRcCNAELzgJHqkREc5U4iKLEADEt84LFvpFvnd8WXLAFoysJTMQU",
  "key16": "2dhMG6odM8RdCZ15AJdXfMb9ydxfXZSj65Kab4oCqa6i9esQ8Z3R9Lw6VHT6CNycUbXKKLJihTtW1x6YyvPWboaE",
  "key17": "4t8hu9ngnZ7AXNwawuvQMThRoUvTYbFGg49sd8JmLTGWz9c5Cc1hZ7FgzB2Fe9dqPV8p4T181Zt1vggyus7UDYTe",
  "key18": "49cWgzvB2mMC78RnKSVaj4dgVLVW867VA6PSDnyMvuswSFj79ccXBAuskdCkeW7n3Q1L844CWdK5jKVGdEbfP9HW",
  "key19": "3wMefKS75yvkKCw4fT55qaDySft6pZ9944GJJfwvNqUkVEnbaw8fmPvLzgc97CWJNcaVTh6D23hirdBaeK6VvnVo",
  "key20": "qR8N62EUV2vc8bXatDoTEyXyZU3PdDxsNbuQiSWKUPMoEpxcwLZcFqEeNXU1km4RSKi1fK1xU9NG3F3wKgBPPhh",
  "key21": "5oNRTxbKrJk8ZshXsCdnuvDAZPgZ7UgQsDNFwZtQW6HgqLX1tkoDuqe58eyZYERP3ngXWP5obBrLX2sc55zZ6CDx",
  "key22": "L7WHVbhKD1KWVxk6NXAUJo67hqpNufyrwN2psfNjaLCntdKPrFqP511ochkxS28Aj78sKbKCsVMktMtDutW44gM",
  "key23": "5vi6ZAkexor3R9pC5HRB3FXswv8hmMPuCC9pCsGQf8LrbT8fJWFcYnvDhYZ7q7oCJKGek3ttrfRFNNPHuKyHL5UG",
  "key24": "2VvSt8ZrQaPucyzuFczMS3oXK95BNx2vjmhtupJFMtT6rMkbzkqnuZRk1MrdkkZpUjsC7cjTBaDb74Uz8QaCx49H",
  "key25": "USQY7XK7avBwJCmvcr8K3fQBDfQrzs169UkqMHZGEEi6HFapbBgnGPJbdSeL8YcBmvj8bvdm7wA4an7At3zC5zM",
  "key26": "3EGnsXLjrpYCKuwFYpfLQMNEVbX42WHCVyk6N5KDZfDvVP2HDMeXMu7MQJrPBhVVc9Vi4bsPA6RFv66MeUfdiViF",
  "key27": "5djYRXwRfKMyeikLu1uKUBgFbKsLAQvf2kJc8ovDmBm4JtCKXNbB4dWn9uESg8o7t7dUMjebnuYhVRSz4XgCcQVp",
  "key28": "473RTNjWGxiqryd46FGkQim1cTQ4W4GSA5WAJ2Pw2LDWDBXWSkJ9YPrSyeUJK2USRnXKTTP4uzWtSXnCdy54U6zR",
  "key29": "TN32t6h7x3rJj2bfdUjDpo8DGsZXNbXGRPXvyPswjtgCN2ag49mL82j1w2FvprBxsJCJRB319pgeCG3JEMKhND9",
  "key30": "2Xhe3auDogfpbAU3C1Tv3wcCNQaEs7uyJgsADhBrGN9YPd68kDbuSZ1acK7u4drJDTzE8KfiooCRWAiKAqNa1Qsz",
  "key31": "5MKNzU4QhRD69BFPC5es9YNfXDkqTX4L6irPW6E6GTkzNpJcbAyfdwCZTppm2vLXrQ5sXtpxsUzChMShyqgr5VSP",
  "key32": "2xbtquJG3RW431T1JEXAzVjtkN1QMXznEtbfnprU1C3D596mKuGFDNb96NxLAamTRi2u3ECEz5WYBSPBmQt6T1Sh",
  "key33": "2xozaZoVMoV4sxqDufsDJsh6uGgp5PHT34S9inJJEdNmLVtZEVH9RT8J38xsLbznFeFia1xc29G9jGcEVoD1J8TK",
  "key34": "2QixiXapepxPGme5Ju7v3HjEfaZs9zsCzmEC5dK915J5T2eymgjNjTmoYAXyHu6WgbHv9GyA2sqWEyFpx491PCgR",
  "key35": "5r3ZzEDooLJ5bNShS1p4imAq6bsRiS5LSuWeRbAbzNXw9fQ3PFLe3WeTp1RMB53PK99grUcwPz81Wbn2wvFFRpMx",
  "key36": "4WGZP3yER64r6xQVLU9r36HScBbmSYad8AbQAeuLwJjhaXytnX8aLRgTMKbcvvKNsyvoEq8JojXoERJWzFkwLB7o",
  "key37": "5mQ13ymGXj56A1SKv8APsmiBK5hXypfHxmmyH31zMUUJSn29w68e8GVzeKqExDuqyfvZu5CUtof6aN3ofbDs97mB",
  "key38": "4msrMdFobWAUj5P7zzjVqnFLPb6SrgPfz1RjPyrKSygLdbz8G6Hy1oTqYPZhGQL3oo1DjaL1kpXTjM99PrU52krp",
  "key39": "5QdyLyU2DqNKQow88g1i3J64htcSmnobo62fsaPzvBcFUmtetDCkYhGZKwHrF5nb4HDoZAp8yB63KxkZ7b4Nd2Pt",
  "key40": "44QequD2Jo13YwUFeXqRdtupxNjGYZCipCaLGnpmXSdwK6DPQEkmEgNKYdb9Zba19ggE9cKZPE73vWM17Z2kLowe",
  "key41": "3SwZiFPYRt7w5E5aXZWGwD2Ui7kHkoTB8J7NGKDdxNpJfUYLxgzrJbTBUc8nrUQmUB2fLbrPaSV1jFTzmKThTPVe",
  "key42": "3RmBw9aqquTJV74VCBhzkPxoP4BrmetkUQmXLRkbXpC3LewRstRe5iEgfN3wMSmdMRDinAdRPfZeKpvv2pv7CgCD",
  "key43": "Lj4tHBwPQ3SCPhxacEP4iYinBMNoVxAvnJzzVo1Am6wCQBjCPEdZLRssFiFYoUVEZhFSmN63qPDe41qzXgA7wNv"
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

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
    "5rSBjGpbmuDLJs6Pg2RNGVAxZ6zaYQguNQGdDE4tPbkUfo2WkoSURvxW3vhMp7gRgwAP7qMJM6juzVXJEoqGqNEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m7JQAp2NXcdbHKZRDfZ6hVE6Vhyxm8XMAowCk6E3EuqgG7s3xwpc6xe2Xbo9B5jAbcJzEa9kALY1S2BVKGjv3iD",
  "key1": "4AdMNmmhdfZXiBr8RhLD23ZZ1nmntNkNF8YfYp7R4CorgSbzAmTuNHnxxKBGMXpGoNGGobvC96rKqAAVXK8EmCgb",
  "key2": "3BaFH8zHoyUA4Z6Tdp2jRfhmmvWPSx6bbD8nmsERtj2CdoEByT8XXPWxWUHdExKVsdLiWnzRsfMd6RSfrGPqARG5",
  "key3": "WHTT18MhorPfvQAw3BsrQcFWL5QpPoyVNzzGin54LkggYwnXtikjYpXoDkhwekcd6tNAqui7oNkfZCkiq3QhprY",
  "key4": "AH4xK7a4oX1r8TYaUFkPvnKGvyb6YheixrmK64DZjRGLrJRpzzrnFJQUuRfPP9BL5n19eA5NpudnhWLuahyghGo",
  "key5": "4S9XcfZiddbSUFC9BSFNNhsqdCn4SjwvFZK136ewho5iyhqYxSdDF3Sd7km2fbovM5i3cgVLV2McDoKhw7aVaNK6",
  "key6": "5xgvPAaPHXx3JJdMxMwzd7xoniyZQwWazxRk1kykogGLmZhWnffUEpZkBoFxAU4s8xKkRbTUN5yLinxHBs1CYcqt",
  "key7": "X5ig8jGsALQKQFYMWgxpj1GngQku5nRzX4r2g84WcDkQqkKNg8p6EwDrF3NPpP1mug2svU9MoEDnutZqg3TKKLG",
  "key8": "4emcQdY3FpLdWtJuD19nQYnU3FDJ18Z7FyJYMnJMfoCLPYZvweiA4bCEve2eRo8sgi9GiD3LiqSReceKqa1hsN2s",
  "key9": "5WgsseLfCLPw5Th9tvcv85jKZDUNFVe3ehHWqexKzBPX59gP4YK7bvrreTfqN2LwoG46BxAn3fuxGB4Vxg5H38rT",
  "key10": "35jF1C3X3kvcmfNBuriivHxikyuXwytYJ6vap9MRZ5sCeiSa1M9KGF6GA4umpd3Hgvx121KV2xxxArCYghFLHGoW",
  "key11": "5udpxkdKwBJEEMiwk6zHRy1BHZWLn7XHA6pFQfE6WrTgypnfq89Y5aKFHpNH2Y9bNxB7KSd9i5raSd9yMo4sFq3D",
  "key12": "5xS4RMuNZ9tGbzf9sQDjno99rxQuqYxpqrRsjysXT4X9V9Q2cjUzAuWgFEyru1q2kcPL2axVp9VwvLq5gUkePFT3",
  "key13": "4LAAnMD2GBHmsaA1bcLKXkUi8GHeAvyq9hdP7vPXC2GCLPXRDzYAUxZHEk8hMH4apQohAm6CkFQtCJ5aA6AWuQ61",
  "key14": "2kJ16K2uGmHWzen9fVCm3AgYJ9FUNLwPeDfeqVLmnsbZkRGtWBSpLdazQDFMHTLDRqjufF3wcbtH3JGhGLNbFwjK",
  "key15": "2eoxkii3PyihoDM3EyhKBuD5xMsQFmvRBtaiWTHboYax7D1DRszLerPiztMJrp64nLWg4ioyMxRtAfGGQphJveca",
  "key16": "21wztCbKUtf4BGS3wzXRHyKvfKFSbtwrML9P3eG9bHxauNnn5C4GfAirGNSkRyRwFoMPsnGKfLtTUqNm9KrdULaw",
  "key17": "5FCijrpvWD6TFRLm7JQ3Y6pzngNK1kWUn6taEjzDDpfiDokr25MFqzx3jhKX7uK4CwbHvVKNPrv3DeC5GWQdVnGJ",
  "key18": "4fkJqQfdjoyrxbErGNFRWq6PJUQuEyorFDS4ce9evKGP6kaGR146Pjfv68gmkH6C6NWaSxYs53mVj5ML4d264sEC",
  "key19": "3BhQFepKQpv3cD6bKvwuoVLECTGSPyzXoGgGP8DrCTprLDhg9TYvLWqE2cqTnfqYW9QxaNBgPv7aRRtK2t66fEg6",
  "key20": "2DprQEd9cxi5yNp3X5hMNjaDRLWLnkxFuHZsjFN4RwC5Y5uubtgUTz2yuRumTyAYxdQb7nxoMBmTdfUMuvRR9YFn",
  "key21": "23QwEjUNizReDfRprU6Kttp9XwqP7JuH9MZnyLp4GDpJaRSKuvqCpKbBUBbUU8ez5RkE4EScwpjJQAkaWxBRms1d",
  "key22": "4xhspk6GUTXiaQ2JxbecC5ybKx9pCeUsdhXNVJA1GHFwizemZCvn1QfHWAV2YhXpBjN2SuUPijWTigAfFicezf1u",
  "key23": "N3wBo7ZPTTpDbdYf1yaevw4REuEjwvZAbjWcpcAxC45SMJUtBN2EqLVrHF176gRW7VyCLvAEQ8c4QLAcvRVy1oj",
  "key24": "4uYLqkgWcXdYUQeQnxm16vr64i8Lq8D5KKC2okXh5tHyxbGyZPKyw6i6PS5yiLiZxPVhU1XJ2p8CjUUojWpqxo44",
  "key25": "5S5iWhjoCzoWZSzUynn2qveViKShmrLH8HiKdFBnt2horgxsMDmAjDCkLEhpNHaKh24Lc6juk6GSyR9sE3NR6CU4",
  "key26": "2HXYUDssyomRWekv1DZkmqM4zsZci1fj9T3UPZbp12xczJFpHCd3BRBsN4E25DuMq7pMWEYnqjQv2ZLWf7xLjYyo",
  "key27": "5S8mWjHfPaKiqQMsqMHRxiVdbjM37dcUPKtVq7B53u9gZD3ZAG3N7Qvn1XNUG1wiWvDVCUQQQPLMqnX7MkoJD6hK",
  "key28": "399Qi9mPcZq89uJEJqASYPv2N27gS5nGgQ9uyHtpRNFkmhf13aq6jR29KwMgwB94MK6sXX8hsvCYYX8gnib6LtWW",
  "key29": "5kChyWwxvysehydhd5mJnE8kN2Mu1aLXwFL6GWQrZaAYeozAVT7GxzNYwrJwTBLtd3csyxFTjQ9pAEUdhyKpHHLq",
  "key30": "3KV14hrLYESTmuoBeELJc4SS67FRgEXyDzyYGWq2Q2d1LEbso9X5j2znJjcLTpmWqCSKiPqbDo9d6Wr8Mqs9u9zU",
  "key31": "4edddfrGFmH9WKWZy7QKiY45UBvkivkcSDfCtaShF5btdjZLdvaReie16weNe8uv9nyVAG72itF3a5kpX1Y6Mi5K",
  "key32": "5EsVq7nDPZsb68NNgLeWqydawy6eR35t1xPobTeCuvGLJaxFH6uwkQbGiT5rzj4PBrxnyCksQe5KW6TXSaQbPbHG",
  "key33": "2Vkw9syspyXy8CpWKTL9kzufnLt6bBzXTFdwf4NAvt4VY5CjEuyx3RBAE2k7pWSvRkLapqxXuUofNwZT1j6RejNv",
  "key34": "3DFUnhj39Gvy2FjVH7uHyoBQDEJzGRKSxP7CB2xif8Gph2xuQRM8gWrRpJRhmh41srDsTKX9fUb46yHd5u85iJpg",
  "key35": "3gW7xG7F4ZcDKyazo3gCf8qcsuEnbxxndw3ApXrsaDvt2bgm81gkVSo72uT5RsHSgG4VhivP5fNFU7kM53S4GSLh",
  "key36": "3uZreKPpLdwxYgXrnDwZbJ39DZkFiuXzK6o6qxSJN6r3zter6MzVwArcfxRHEpmZJMVqw4v4todqKyr3bYuLuTRL",
  "key37": "3ggayPrwD1aLkNP1YqCag5TzEYyFhmdcCisXxSifZJFr6GqKTz1MEjGvcZVQBCzdkkkerXx6z7PWLx2jajViB2Ki",
  "key38": "651AFYW5fbfaqHf3cUCjxmPUA1asnJpp3XvqWb9JKUHZ2ekqLqWj2UiPjPpaJtNbpqcWg2giL9ePitZ3kEvaUb6m",
  "key39": "5bgHYdctqTTvGdHqyvNg7CkDKEKbKSQ87h9yGhw9znMqqw4ishQfGvYfeYS8cPtKa1xrRd2Dt3KRjyF9F8wYZUNT",
  "key40": "2TNW2JEhrBjqL7WKytpuc1KaRngjWdw88kpfRDMZzG4oZonsqygefuzTFKZpPqcA4ik3ALmxQQrhuzGbTr8VRcp3",
  "key41": "4g5Kv8xjCGDseey3afAhn6csrwpmNw8gDDtqTD2pVMQPW4f2WWtQwXXA9z3C45LTxyZBGZuKYE315hw1dnSYvNYU"
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

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
    "9dVdNfpxuUjhvk2GQHusj1zBEmusQgAtSDt5eFKucCzroDsiPwbRqA3qx61wosSrNDzWashQjw7yE6aPDmW2d2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26FkNj7rmmBA43JvEW4R14vUyLfRooFZ6edBpufhJQjLJXFSQYoLLhZFPYmgJU2GbUnzH5zJYrrcgqE8Rc3EsH7t",
  "key1": "51HagnYfdfgJwnBFjnzYopZ9ttt91cgSaUePHvG5gBsbjrhaCnkkRiakhiGHFqYDBERsrPKcvXqQKu51SiqsAz4E",
  "key2": "5T7UCPfcVautJ77SorWZPD8BiZtgVA6yuXPCMRkvaKMQHcuw6D51ovHPoeZADx4Si8WUfXBoirBbNsAVWvBh5TR3",
  "key3": "5ZDdq11a1APdedsJt5bAteAi4FKe837UZ3PHayFPND4i6YJoeDFnXhpd1Xj5sQNeF56mEiCQzZWVBJcdniFQoFx3",
  "key4": "4dDebsG9iK9srfL9V2y68dfA7ZxhG5rtrNxL5VNKZbmFTyVg49qQq27Ys88CMuDEnMYVJL4nmwBCskv7JiX5wLZz",
  "key5": "SBZuBJdVQNiw6z8E3FYCHAv4wQ58nW64gvvHpgun3PKdTomG2C1UKgZCU4GVnJ92TMDrSTjDPgDJsLGE2SQyPpL",
  "key6": "3pg9RA862N2NiQd3XeegGbT7kcSe7a6WAo8FWSbMDKRikxtxTKEqiq1CtVDi6hY5MRTarLvT5weK3jzWRozCKJA1",
  "key7": "2QSNqaKNFaXFd9JJhM499hfpP1e7MYNbB5B4ZeubzR8xua39G6wgSgXW2MKqME6ti51isKt3cVctXDT7n22XiP86",
  "key8": "5Mvar8V7fe2usyt2fGjU2L9diAmdN7eJMTRWvo9mT2GV1aJs3RCRDyjoySXveHH7MVSRuEH3bRtUTJjMGjLpRjnA",
  "key9": "3g2NC3NwYswNQ1jRXDYaqc2kKGnjZxxuxF44JCQiMvxJC3Bv7Mu86FW24jyz5pSr6GuuqBEPYb3R2pyh3XtBoEMt",
  "key10": "5PnHxKZ93hJvBPaR5EhQ7qQ9EhM5uYtCSJ4KhQJMEHAVssoMceerJQhAs3TBMDzDRump4zF2dFwA6Q4AW6WmK8PR",
  "key11": "64RDEhVgNMAGgNAE147iNyD2nYpQaoeaErrj5uMbPwFHuJY1MNo5Nhdw1qRNV3xN6abaaRHQ6wrZXmduZrJCzLJ6",
  "key12": "BZ7AMVhw1D1N9iriKQqyRmYo82upEeDjn3P3NDFSoAut4drX6bhoY15FJuFEevx2gGnS3xZozSkLTPzYqQhvfLu",
  "key13": "5ro1Kd5r2uMbgDb1nWe3fL398SdxUFUuHqHsb23BcpyCmgXJQkSHxoKVNLifAiYDK6ow7P79GmP84uiwKbLiT8nc",
  "key14": "NCzdKGXkEAg35YQaAt1usAtX2ZEPjybKorgtdtSjgibsbHZDwJYaFJprDLbacvVi4odfXPdP7pF9pcVbwDLMHt5",
  "key15": "2B5BtZQZBpwZtUJSAmAUfJNyzpmq6sJ5TbbkTo4ZTqjh64qm1Q9ywAXc2Kdov2U9LVLv9seP325UdA154qTgZKq6",
  "key16": "C9oCC7C3jPvVKf5Ecg5ejyD4ujxMPxqcfgBjjkTncYFdULGkv1dzBALfqwu5GqkSmTQiko4HDYQ9i7GFWbJerZ2",
  "key17": "HnUick3tZntk2BMV7TpBFZbRo65crE6VoaF42BFu6uf1UDodAsRkuTrRpnZ452Lgcm4P5bMaxVoNmyRUKaAubzg",
  "key18": "3SjaMm9fyu3QQAmUGrjY4kZVZcyroLHYcpL6QtfoxPyg4f7QtGTv8Bt71E2g8kWV1r1dBhNZ7XM2dhHVmckBME2x",
  "key19": "4h1qe5dh8CJmdonKydePKKsqy1Ga9Fx8TxGWpGE1QwyGFu9fMqVxsy8mbPp6T4LbgUCzsWFytQUs5pAUTAM9qGBL",
  "key20": "4jqWZd9bcuTGm4Qwa2rx5wpTdUJ9rreA2gTn4vTU4tQFeJeCxqbMVQK7R3ZgfSzKHZr3JUyNkF16S4pwuEEeHbVu",
  "key21": "iUE9ACBkh1N8WVTFo7LcHfpRqc5cz5nHmDqcMGTNwKonoSQUE9evSAXs7xeyPQehhPPq5PEXRZ9xrwmb8Tn1USc",
  "key22": "5h2FDk21GisjAPJGvyp7e5HL2PSSmQWvQFhGHMX4QbMsQhX7Nz5cmKq6oAwgcp51zAhdDQaoRFuFALyATzmMfYM3",
  "key23": "27vUk4GFFePS22wjxMWTkCTnyfaGhWcSKS4ZMAEzFPum8Jie7Smpyn5q9s6HWskwnJSPxpGECp6cMjGQKsMiXdBE",
  "key24": "3mSU8caNdviCHaFnTYXd2kddXW9m9tCJxTFbtXxxHNvh91hfkDvS3CP9K96sdLiNTwYWdHbLECiXGhoHPM9jaUCJ",
  "key25": "49PMidLGsAChoude2NxdxqS118ZF2PmaJeP8rvQSvfeC3boSXNyePZzho4RL51pWcvuUWkzYQXxdtkchjrWCsFSt",
  "key26": "59qMcTowgRqU1SVp4eKssZ1Y7AofZRaWaijuFJxYQEgEETpiw9751Z7qsjRjtV6GEcmH9nt8YGGXbWWLF9vTniwp",
  "key27": "4h4toyM6RtJ2wggvWx4g3qCgVDZrNAWd2fdxLqZVry2ja3Bq5vtM8DH6xDRGXvBbMiKYpkxZ1iZQ12pXSuGcQuKo",
  "key28": "X9b6AyaoKC46CJxNeHDCzW3HAE6K9teSLoaeBU4RwEPQd28HQH62jHjv59fLgUJuEff7CnHuQxn3LyoqWW4DMV8",
  "key29": "5n2WN3mLEXRtG3UzTLoRBn8nvEPBp4Cs2SpVXqqxBGUYjS8XZ3f1UhQB35mevTr3HxGMCpTsrdU6MdXh6vvw3zNE",
  "key30": "2M8numcNLp1ntsguzA6pY9yCSNaBqorRfzH5WUkU6LLvnRy8zQy3k7nhmyNtwk41dkLpzNkEtnMCNJTgywhfZDvE",
  "key31": "4MFse2TZratB38pMH19VW8pZFg82vtzzC8FYZFJabSMbDmg6tYoCSdxar2JCf6493YRfMf1Zho74ksKxgfWzqyGy",
  "key32": "5sbJz6BSZsFsZmWBwWTeJgtURDRabtT2fFPzBWnF94yCtrfv6AbmdyfMnYNTc4h5XEd1boa4Mt5so4yzC6Di9YEf"
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

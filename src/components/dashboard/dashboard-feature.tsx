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
    "2GZSfsH2ssh9PnhadQttL9KdmkRAHzk4KnZiBFE7mDxAaXJTZHETjtHN33er25fAD3Ubczws2xFQj2i5Xv3j4dvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kq5rgtkAzhqE94ogEyvFgg3xH9sz4HFHBgjvXzsTQ394yqysoHwHdA21dC3se9qcadLcFS8aiVXWLnJcsEJzfcV",
  "key1": "2LmEKErGpUPWRUkuzwXrefMLoE4fDwXL34ycrKXUTH49Y2hK95Ld9hw1Lv4JVn7EnscYeBPVs1MctQgZdT4AencD",
  "key2": "4SCAuui6zCD2nuidaCBtYn8ZW6i1qdybeXTerz9Ep7ohRuiMhpGZS6s3eVoWBnZ7yKaJyDamst3cc2ERLLmDZabq",
  "key3": "3zeDbcwhkLohRxeBAwtAYHSvkBpqrumkkL5ZBhEE9QpHgKGedCXUGedxiPAfxYBMuXHXvqfXQqt2N2aveAWMKnDj",
  "key4": "3rg6c3WdBYmEVp3KAHPPPDnZnHi3Dc5KzjtP8Ww8fRUspXdqqUDkmFvCxVKXTtiei5xXj875rGpm66jDzWeXvXvL",
  "key5": "2Rvz6Hb8E1J2cDWhEGAtmEWMNWMLUCtPY7MUuvs91YpZWN3iwc26Wo2LE1hCA3Y7PrKbLsJzQMjBfXdzfjCEcrGn",
  "key6": "4UyDyckkGEujPRCYa1PxiMngZgERK1a9AQ5yqYmY5VXwmQkCUtb2kj8Q8eUaT4KLFD45HBbNDqo5hr9Nf8bEvc6i",
  "key7": "2WmENpVFUsAyCChBzLvDCbMbGdvXGUNAUAgui78NU52T1tPgmzb1oieWoNNaTeVqbZKQZmmLzNUgHRz97CEHTqM3",
  "key8": "CpioDXYkG5r6MSk9DNkTz6vrFdpjeBBgURTQFrpDQ3DZ7ZwhdcRLqPP8owd9mxMShQjiRwHiW5zqNhwSFE1uKDZ",
  "key9": "3NRdn8YpN9fMt92gDMLB5u4jSVzDoMMfGSfBy5BGhpnPoFHwi3Jn7r6zotKKVqunrBzhYMoEuQNbCpw5MfCoTads",
  "key10": "2LvPss3EuwA16ijbbJzcLEXkiWa5g4Ju7TfTP3seCNYbs8FhqJEKskTfcuVzF2xqNQP8JAeKveiivHjqzSvaL9vh",
  "key11": "4ohSPo6LcsXnWkQWeNjooaFHvzq3nCUM9JX7ar5G27k29eynii8WrkwAJkJhGiuNLZn7EndMT5kW8ZGns2faayiY",
  "key12": "3LtAtAc5j515PzaKVvsRR8wDYu2f9mrZqDRjxQPQy7DVtxu1YDDSD8p2NYPysTQb26swbgVNSfB9ardPexzoB3dd",
  "key13": "vSKnaQudzukzb1o7DjAhPRSAtEhDkxASiEHM5vBeuGRz5xNav9hTRf1igffJhmYAmWDsZDUMD3nhDVUYZPULjFE",
  "key14": "3rjajQxRRj2zeHkF9KrdCAojot95GK3mBTjxYoRiZy6PTkxi9waYBdgg442giry9VFLZaAFEn9Eav8X1YKTtgZuX",
  "key15": "3qgbvMHzGxf9vWo8YCM2xvXwd2MqWWrnmmVNMcEXUoY5rBXw23CcMrbBU7TTDnWtjXYcEKRvcd25fcEsPRMxhQrF",
  "key16": "t3C2kL5airwzMJUaK9zWu8wbqruS9waAj1xoPZMbY5Rsq16hanEmMSefh1HY7YzYN4rWJHD1j73HKgq13cjMvF9",
  "key17": "26Z2PJeGmix42gW96oF4JbaztWX3EmFeh1QFZKKVbUtDB5NAV3755TKyiDA7L9fad9Ayr1xvwHKe7X1i5vjZgajR",
  "key18": "5eKL2XvsuwXhQyMYq1XN23yw49PzgadL6MXMAEdVT9pvvPYjT5KTx8w2a74z9kor4be9r64TMNt6CFr51CTCfLdU",
  "key19": "3hGwa8GwfgXCtG1LFycuCrbnuEtoRu33TBZakWop2igHuczmJuxxV6UjBKoSniTU9f9WmEDp6vg4nbEMuqxPkVhJ",
  "key20": "JMKbxdapMcsZusP8MRhDShaaR9neXJLfbqAu5gfiuvrW337weSvApaFLJstLmHn7EfCPB3DNJxEg5jnFttLFvDL",
  "key21": "3UmYza1mswNAHbTusoX7CxahcwYoPXiJVkLdh6kz92kDe7t2wqrwq2LyHjFG1GtiUTykEdkQ39BDwDvdLH6jhDVU",
  "key22": "4KJ9g4yu5JhdmoauCCkHSPyf8iUeJyFsA4YbNaMAWPAuiyqUkvAzv1upQYnLvLZJUNqtFZb1t8uGocJcquf9SfCg",
  "key23": "2tdAvMJhgPxDNx8McbTyFrvcjoEjphVhyPmchEvPMFWwrfegiujWBftqae5XJamuSTavxBwm8ZrvBe1BdzZuohKV",
  "key24": "2kAvYWSw1Gc25VQetnkBLhbrAe4UhJ9kW1RCerz8rttnkPxkH4pqSx4BLwtJKsNqVuiQcwMMDrsdNjV4zPRZpxG8",
  "key25": "3GZcMagzFtjzK3Vd5MN11Ma7AJGo6Wiu6JBFatvuAvECCVHzfLEYTJGXG6friLCJp2rPQgYPmi9AhXcFpZYw86L4",
  "key26": "t1uEUya9iDMtaW8wwH51J4VvGSSaj5VzUtBgvUNxUwCW5yaNCSJoKcjMbyHa5zedkFCSsuwqLfsa8jbAuSjYWwm",
  "key27": "5RYzgyPpifezDzVUmQzZKHcg79r8h6e2b1rzfC67CJLAfrGfp9JMX13tu2YgeNBh1izwWJw74pQGbvfHBvcJt3no",
  "key28": "5tF1q9kHemWubegb5xRBKHtAL5vWXjCTxW2iSFjqrnMxwSMbQsAmmr2jfjRC646KVQ1hnmCeMnmax62WqeoE2dif",
  "key29": "5QCHJaVGm6TRuEBMooNnUTWue3KQYUuHZFwmXqwz27Vf9aSk5MS6Q9SBdGtmByjmdYkE7k6s6ZRkLTbpMYzUA9Dc",
  "key30": "5NmVwabdbKNEa2S99y2pr1N6RDFTace2QeEGybcqwnfRYFwbe49pUGrfPBV6oUi4YBUtwcs3mTc3bazWURZQ98Mn",
  "key31": "4mukuWRto54sv6LsDDSH44hSj68YftabJTKnGgEYUidpDA9RzP4s4c4mznxT2WctZSp9UMgQ3qPnnji9FRjGeDYP",
  "key32": "ShkaZ6vfFvEVrYiec6xSghUaoQjrMAhXAzq2yHzvgQN6kuHNLCpHSgGp6KC5CgaH24t7iE9xyKjAEmuh9YqBLAf",
  "key33": "2HGvfxxYh8grAhHqud56YLVpZPUyHvqRUrT81sCE4juWyPFgen2zsf2AfiRyjbrMFGzChUduntAHabYDfyW8TWRY",
  "key34": "d23KjzB6UTAbczpYdSn23fz5aQPpdpHUrq4L4sjqXvmjvyUVw99NBZNWBqggG7QbdCetDFmUn6gDWDAF5Q6nBKq",
  "key35": "5mbwHRn2CVYoj9SNLpkpcYXn8gzg27uVVCYugdkUanhtNnhTuY3Crodb4Zwu6XBSNodwysxAX117uj1GhNiCJQUX",
  "key36": "4J1qe6YfJ3BQnxwiY5QuXy4ppaQYDUqhmEd9q928kQK6RoKbqoZVy3JGPcdZ3LWgPvpvTJkb7W4mJz3UBED3bcDv",
  "key37": "4UgD7C9axJmNm3ge93aGioKhU9nG5DtucWxMQGQEzgwSWKvMiWGKU2JtnCyewzFxwQy3RSGwBpk82jrse82GHKMH",
  "key38": "5EbmiAfRJmgMF6qPgxk8EtwH46pgxvSMVYxKpZKCePYLkbkFX4tqX8uZ8vKdhnpKnk7U7NT7h1seSvGyEJw16dAs",
  "key39": "4dQUoMhGqbhACmiE7UQaQotvFeEeCCkzVdsAtcGMrKGFZwgpQ4TRzCvcJQVtYczz1YQQEkmdobW5iAz2qqzVDSyY",
  "key40": "3CDGxBY1EPPtTDuZy9At5gwbQwTVgukgh23DKWHLYsDmG56i7u74wiNo7aXiBhGYZrFQT5zN3LkqJsLYDXukiiMX",
  "key41": "33PoVZqMzq6CswGdN8dtUXqrLsNpTMPPnaDPi6e1c9EqqS8SEwkcrSkMHoRNb92Hic8dgRnAfcT5HP7u732729RC",
  "key42": "5REWhBJJgG2txKkAaNiVcQ6KqKtUpFU2KAFKBsNoQ3mxULYqJVM81LseGXSAGNasFh9U29Wm9vGPZMpJY9T2zbqS",
  "key43": "4fzgHjiH75CWyd4h4gSquHA1ixDHTgS19hRzd6wjFgnjBWQ5LgAWfATGGKkxfRDhPhAbfMBYawCrGM9Dx7EeckbU",
  "key44": "3zhWvHkcN51d1ghdjoeQyt71cxbJetDusKofWDzcEu9wzD5NUPsK6PNZdEzB3cE4fDyMBqCiCfmBwoczFFn7HBXe",
  "key45": "2kuDtjRNxhUNRQs4oQoBgmzmpRFEEToXWjqBjzMwsuQCxatUp8HA3wkgu3sf6JwS4UGt14RKSJDk9SSHb4ju2wLx",
  "key46": "3hXZFxZpj7K1oMWsL6P7kBXmKtr8nkECoe9uvSQeGywd97wgW2U5iLguUM7vQnWH3mZGuS4vgbfhuMxuGFnYvahk",
  "key47": "cxkBKYyDeGvKv6iExsURHu1VumJGWEYRDHLTY5mi3oTkNzSoM9A1qxN2JRTc3yqL36wL5uwbXZz5fFJ8fYvXsJh",
  "key48": "3iDhBdbhydTcS87jvFxZHBp9qLDD1tpy3naAyNwEYK9E1UTmkw5ZRAjJUFNeV5WnDnpNPbtgSqfkCPQ7Nypy8nv1",
  "key49": "7cnLd7S9Yx1EGRhFVVGNtKvx1FbY1zBYNyphDgtoehC3kedaEyVdnNH1rnJj7Ryinm7Bpv75fu2MwYzqe1hAtET"
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

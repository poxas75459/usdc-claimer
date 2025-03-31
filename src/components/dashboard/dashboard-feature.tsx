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
    "UZubdQxMMtyhSD37qxCL9GWqyP2hCU5vbN2yQh182HrV9FKECwoK4TgBSxnzNicooBUAwBgnmcpJFzQHWM4WTTe"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "JpT3bHuuEwSshyMg6F2DcQNYCrRZikQJp2wz3cd5cpN2VZ9UvuUQvMu8JXHsw7AAJu1qdC2jZZ867Nuz8AB9tKf",
  "decoyKey1": "fcXQi2zV4SqiuzFFCAdF7EaBTeBtUhUQ2iPdTjur5qhwimHJuthFC765KRp7eCc8HnaqdMg5Qvy6XehxJiKtaNk",
  "decoyKey2": "5BgUaxcnch6Dy7WSFKAS6sT44qrFZ8rgFFdaVRv51dr3yxTkTQsHxKoU3A8YGcSbx7TzD1u9fBdGdZ96hXGyEMLt",
  "decoyKey3": "3kGQboZXXfS5EerXDU2STtR1myJDhGySQB89LBVQdDZyT5PJ5e4tFiZincgFWcYcoeUUYdKJeuYtNWfSN6gZiP3z",
  "decoyKey4": "gALiXPeGTXMGQxjC8XPX6MFJQpLYRwtjfnW2E8n29EFLGkBAPdQH8VUnewqyzvn12it2V7kxd2sLcUePbbTcS5m",
  "decoyKey5": "2X9dfUJHre1uJ47tu7Pv6yiiddzRnrmw1gLrnk7V5KUR1xgYhPjQ5DG5qaDnDuUh2k8zt82t3zpUZrq4PvPp5K9w",
  "decoyKey6": "3qu8HDuyLUAoa2MRYEdopi8F2vpPWXFn8ZoP6JYrYCBNtFx6b2Mfe4RbDx8eMX8zAdpxBSpd4xBReGSw5R1YmcyT",
  "decoyKey7": "2LWfexeXjEcx9TMBKD3BpU1nstxQYV4aem7SGr6o3Wh8rUHXxDv1osYnofssrzzeej2JhEPc2oMRhGi9srBYcoZz",
  "decoyKey8": "4KxStsnTt9UWCzUNqspVSRfUZzgkPRbzrsU7D6VqhZvN1oTGuqHKDsQDpHXkZX3p1ENGQCAYtWNPBwdV6r3i6MKs",
  "decoyKey9": "4qEjnLaXgb99J8L8ZYnV3hCfdYNNTDnChKifDtanc5FqLUijwH9ruCkrhmq5K5XvNazrDdxve7EzyHvjCvSdt3PS",
  "decoyKey10": "wGMBZ5eNEVvMoGR9rL6JrSudaXmsxST7dyFXMts19iUN3zPvG6fFvx4cg1gvHNAvJJa7y4jXyrQoszGdzCgtn3q",
  "decoyKey11": "5EwLSRFdxybFUe83QVTYhjMkBHFVNLCpT21cV8yqoiEydvVgy6t5EmuZkEvW17vsPqcKzASFb3Amq8C7Z2WKnqAC",
  "decoyKey12": "4dL45qNfdCT2PMfiscmCxzUyEj1vf2mqnxHsMVGNSKW8uXfmU6dr6wfkuRMWyoyAWFjNRV9uLNPRgRBBaAdkfGui",
  "decoyKey13": "4e8Cdm615QRertdrpu8V4CNnPG6BsLQ93f7RRHm7Ar9KwpN5EDtf1SoMQee6DpuH3UKuMgFjF9hGxNE7tvaS3Gpo",
  "decoyKey14": "1sMY6BfwjdVog5P4qGASYP1wUzpszHMPbyV4PpD65QLd3sUyxfoBw6zUAgMGsTKpMdWoTFSGbdKTvszPVVE33sx",
  "decoyKey15": "3jYkhMYHv35R8UPQrK5iNMN9bQa6kLjNE39VYbW1yQSEeWDRayY1NZViGv8Q2e9Wr7Yc7VUqQasejYFVXM9EN4Pg",
  "decoyKey16": "3W1HpwKHBKRKQjjs9B1K8NjHwExmv8jVYMdX7BQGX84qFn1Bz5C9Yr7qE7NCNmsrbHDYAeVi4jeuqJm1zDyHKVba",
  "decoyKey17": "2qT9LQJqVnqDC6ewpXQmYqxHTW1AiM4f5UBFSdzRoxcPSmZn3HrUgjjay8rzMYzkr7E71HEhPU5wkYANadzhUqgs",
  "decoyKey18": "3b7SDr83RWEom5c73DDYKnxg3LA2y4G7YLu9hD5gZTKZWNbAgeSxErQWknsPujNmEwFxHg1YuUZTSUBbavtkTFQ2",
  "decoyKey19": "tBmMZYWcDEXUJW9Eacxyi5TqW17fXBnENpj54mMrLBNyxoqADcf6EXr1TXd6L1eAPAhW4n8SxRmPU6SzSk7oyPw",
  "decoyKey20": "2HWdq52DikUb65divPySavqiKEFozY27MbKx9sHiGq5R93rJSS6hiRvEzNz6mDYKLwLEGH44RzMhbzw3W5q1FnMo",
  "decoyKey21": "32nNyD54uAJy3jbVjogcXS81c8WqnPoxHKuBZwgQ4Wr5kwx6n7BUz4LoirtPfDGygS5pYpAhQ14u1FaGuoKkRcuV",
  "decoyKey22": "GkipGPdun6o38HdWjXXUzcu8fKE2WbD2WnSNtWNLi2CEQyNfa1FkpcJNRPpyL2k5W4Bup5UApAKF5fRDsCPR5w5",
  "decoyKey23": "3ziMS1FPrDT93UhmjpUn4yLimH1bUVChADMdgCkKeqVefCuB5TsG67Lvng6UPd9NMJWgKfay5Fng83mbYyYy6K2R",
  "decoyKey24": "4osiGPMe9jmjYGoQw9eF3EMgybjbXQEkT7c7c4ZLLHeTXv59GLfjPdgmm7t1tCu9Hj8AFKdd5ZSCnBCrSRs2sr6L",
  "decoyKey25": "kh8nLhNmC5Y2DWSdxfC6HjCLq8zuiBjuUy52vwN6whmzSJvEgqZsBpPD6CMkkY5SBgQLypE7eBwRazyptCR7QFt",
  "decoyKey26": "5nfUVzanHhbyaGHAzkGByvXqj9nBjGrXFjCJxLDQJgms1vmgV3pRd1N4mT5BPXYpiECeYMXMFJDmf2r5u9VFLhP2",
  "decoyKey27": "jzV9gQ6q7nMjgGVgjZPDA6kNUPtxBGfdjHJuXgTBkzN7jNPMvXGHEWkRF8ChRGuuYRx6n3wMJSHrHaRUSqic92x",
  "decoyKey28": "ATw6s5mQziFN8RTZyRkyL4QNSXNw5Q3u4cqaJuYHUEr6TGBVc92D1f9iHofSk4GDxMRMEu31ekvU9aXkg39fq6x",
  "decoyKey29": "3zHxNPdTUQn34xHJeLB6r84eAzB7xLkPdQeMaRHgKFKanyk5mCvSErWmyRKasLwgaA45HJYC4axc9NRn2vgVU4av",
  "decoyKey30": "5veqbgUAskRA7YepoGPd9oqwCFetKSq7yU6psJPzpxDJmtGpYXDJfQzdUqNWq1ZW2p3rEPDTXtTBbLKDX2kcafjf",
  "decoyKey31": "2v7EhZzERqYoHhWHNxaFbKw2WD26QKycs22xQTEGkQFTrRN8jEYNH1xTFxpLZRvcfUEzciuJdmFj59Qvmtr62HLg",
  "decoyKey32": "2kJdegBsSE73moAtmxS7U7mfLFg894DnVNjSvFr2wroUFR6sRmdF3mXGwZbtUSPAEFY8kLQ7f8qWtv5K1KJ5cfPE",
  "decoyKey33": "PZHXkM2ccfHdiynLXbvgRr3YpEvBuy5swhoiNRAwDgUyz9ShYUEXGvZx7QS9Wrj13295m9ficnmSqVQ2DDkfUG7",
  "decoyKey34": "Z2JSH6rtii1ZLbwF5mjqWyhzx3rPmMkkJ5wG54AhrEZ8eQn3dti2tHVkUzFjHBpKQhuddjhhe3SkyyzjkFW89xN",
  "decoyKey35": "4rvQcaBk2NQ3xX3UhqrG2UBiQKQogckSEDuUnkYq6RphV2RFYFfmuwZVdbfZarrezqz4NxzyDhmc9AuSNhPnktUJ",
  "decoyKey36": "3WR1rAJ8qo7XAq7Lk3Pkf8Gzb7oYedDNhNXRqfPPXGKKcfjWVY2txqDmfA9Tj4eExYBy2J9YA5iNawXKQx8rU4CT",
  "decoyKey37": "36sT2osB4ufPu9tbGcZ1EaicPYMUrzBAFrMWXedurexQGNXzC7qGPvFDadBRMsP1C1mtx6BvApAqxN3HWzriS4Rr",
  "decoyKey38": "3xZzhYuq8ow5qSj2vfdVcTToeJ4g5LnwaAsCbrPEghDsFRszraJqd7FmZ8f6xWRRLoKJAPRme5fYcFuJ7pWEU4SY",
  "decoyKey39": "5P5pZD3NpWiyjoj986oGrwcn1o12VpfYbVcAEApwtWQANvovQ8V8sfnt6USFm17UZc45Apsi8zc5q1CeBhgE418X",
  "decoyKey40": "2MWr6uT715HKCLLf5mkTehRPDMVFrQVQ1ixiWfVCxYdCjrzUAswqeagozvYUHSxjiTZsswqihWbxHwGJWo9dUfxe",
  "decoyKey41": "448JL3sf1Jcur6EwZao1Hy9tNMcY9xwLWqfzi3b6Bzkaf77mKdQhi9LyuKQMxFC1mE3oWxPpDx2J9edMye9aG3Xc",
  "decoyKey42": "22o62D5WfKHWzvKbi1PK8GeSSsuLsJ1dfeEmwQKoEgWV9dVYW41d5yMRfzWgwWG3dKiV3zteyYQDvNqoqFqnZvWo",
  "decoyKey43": "2AGigezYczXChBv4BjwtcVUKtuu99GJj8P5Bbv2NSozEpQdyTL6T57v74CK3JUX7HqhcSJELxehmZY7B9oUiKpaf",
  "decoyKey44": "3yE8BaevvPwsfuRvT1KYF1tCYoXFvxuZZb6Uk7JECJxntGFAnSik4v3nf6GU8cyK3jhxLKT4FCsV7s6rnLAGgHYh",
  "decoyKey45": "FGDc33A5SWyUpoiHcR8SD1ciJmBLiztNVEWhUh86zMW5t8V2VuL5qaX5fz16cmxEs7KAQM5VCutDd5jjQH7A9GE",
  "decoyKey46": "2YbNi933sFJiv9V6UXGgVaAvJR63vNCmopqhzmyF9vhvGJmQMoqMuQgM6JzMNseeACi3nxhpnZrkfumjkU4cx8A9",
  "decoyKey47": "9gc2itDAE8TNAWjt1n294i7cQt4iLFtoga4kmDdDdCJqTyopeYFWxLzMjamLDmnejRHXFnbK2HFixmZUigaQEjg",
  "decoyKey48": "2qQj1iZFtqe4niipuCrHEPUobLZHQmJiaDrLGpbfxiEjACLDyiVqYBeQDZxX296sATWZTymxNsELhMbXZXXmVoHW",
  "decoyKey49": "5ENB5KfMuVD2R82QxveyqejK2X9sRUTvBC8fuHJhKUdtZJxMD51XitcSxh9dvGj4HPMdmwSqy1GfDPCpM4cAaTKt"
};
// DECOY_KEYS_END
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
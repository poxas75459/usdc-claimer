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
    "52DfzULJKLzgzni1Xyrbpv4cVgo1j2m1Gjnruu9pvZeU6BmcKSH1P3WYd1u4cMsRCihEMUU7PNSYS5bF44TsNnoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M5vxY1N4Y8CmSyJKHp74xWT5Ctgjf54Rzz8ub8QWVduhqFYSRmNPFUu7i1gJuws2KYDyErNSVZXEoG7nBdwAhXF",
  "key1": "5YmjFVZ1yrhyAEbgcpcR2MfmZRpJvYuaJ6WbUnraypgFthjFVkEf2hVym1ocs3TBbPXboR3xDqayD41F3KZBpMvr",
  "key2": "3359zRkqxwrDo9yYM56sDr7ef8JKRtzoR1fz8vLAfykq7PFFYb3TgZccAAvk2nPjFoT9EQqNqnjnFYkSqhrMW8KQ",
  "key3": "3pGTdPAN58bT4hjHJEJoLvgN1ynwyBZNv6Ls8ExL4W6X6erQEM82UihWQA8iJVezfEFWdw3h5vV6eDxAq5y3Miav",
  "key4": "5bVo7FwZEbAVhKx9imeSsNRUiDDcBEQMyCAGm2oQUogxZaQSMsnCbE1MaA6xYoYp7UFbMXBtkr3Buowm4pV5iHmp",
  "key5": "4DWexgZ6oTEHcKEonven4Mr4F9yWLYNp1EdcGYNDLBFamv7F9Stigni8ftEAfhQ76fag3MZAFKg3bz3py1Ma9RQv",
  "key6": "4di3ca8p4vbf1uWnPW2qbhv3YYKKDqx76nPMBQbkkuLVmxxYxUDhNvkij89UPGnmSN5y1BEZvbTwNhYPt48tmp96",
  "key7": "2HpyprXmBq4oJ8BZjUKhePVcFTTco7AuQnTZUeEMFTG7skfypV9PBG1MgFYPELR9GUGxgyV3NfmjzaLYos4X7G6X",
  "key8": "3hjMxRpvktpPyVmcHfWBorpKRyZ6GFV8phMkVW7MSnhoPpdzYBaeLQz6fsQu7B7YFLKeSYMmeUqdqkUwQ8mg7Vfh",
  "key9": "3jZPML1tZdks1LiRauqzJd6f8bGt8M83duCTDcGHF9eLxiWphnQdDhQRGYmEQtZvPh3KLTpitfvhiqJ9fofN9aMC",
  "key10": "3pSk55vU9MugW3RptBt3mrmNw17zwNweCZf33mGhfqDyxUWGmtoLAwYFgfTobdHeiHbRKvMKJShaSY82kmCeZysz",
  "key11": "2FTPkmF4Bcwp1WmPXKx3bTt6gAuc4nYzZeKmK7EvnoQGhkbx4i3fftxGSavBxyuXDtjXTpoadhJWE4jKr7CnWrqm",
  "key12": "4nBuwKr6zqJoLJco3i6BsrzLNSPbZTXySFP59jZrvYsAsqPxSNJmghWZ2243murp4dFqCrA27r9U75mHCuoBR51A",
  "key13": "3gB9ymbkhWTDL1Vor9uRdSGERsUFdnA3oudSig2rknhpkpk6vvYSgVUukeKdySmdQhMuCKY1kdw3eVz8HDNZWQPX",
  "key14": "3WnRD3HMGaQf5DeZ2qAn48MyDfJxfPGoF1jeKkRrkPF67SwVK6z8CcDUAoX8wcXAGrigqVbuhmdBAngwcEcfjzMv",
  "key15": "QuWx7DLSZeEZE8ShdVjUgZLsYoo5PV3c2U15BQSPaqFZLv7yvE5SfZK8tmLrndM9ULCanW9cJEdLSD4oiSaDggq",
  "key16": "58ptRkeqvQBmF5aqVtHiCGYremeqLZptueYDxES5A5yTrXEbjVTP7aNzQcw5ZnQ4t8foL2YYw6KqRrWxW3qxVisE",
  "key17": "3YNF4YuEdRPdw9cU6KXhVgHN3vajuf8D8Wqnnysm6wm9tmXszcLijv87Pg8cNQLnsLDe5ESSzQuWggkmqCyFaFkE",
  "key18": "5Li1Jrcx9JzH9aXYArNJvx5FSQtjw9rJ3vgFfVpRZ73pojSxQS2r3g7jVoBeYrpNgc23zFpphnWu5Jiym3Z8QFUh",
  "key19": "2HreDpHTgya42HMkmde7fzyUFYhZwgJLrwAstnepgwwxjRFzduQ4iqDtMWA4Mm6Hcfqu9gEx55Gv1fkuGwWRcWgk",
  "key20": "DzMYyrGk2fSc9Qccsi1zpsep2pJD65HSwvUFi1jFhxwp3gorwHzQMs6oLNaYEXLUyNeYM6skxHTN5bavCKbf8hk",
  "key21": "237PN9vZoREeAZWpgTvLJuFiBAUEW9uajpeeei4AwhkR63V9Z7m3DFzFkgXrKyfvap5GUQczXwhc5j2ecTcp2X6o",
  "key22": "3RSgYA661vEXudVpNYTVVAqQrnFwA9QHJfe4LE2QfAs6eAyK2GFJWoich6C2MLWku5GGWMNWiJyjxbroU1wPLZFk",
  "key23": "3Y1YUGpbaVpkKjergY8xA66YtNeDWhU29UQmL6s3roJd6siP2jJmdsiGh2BVhrU67JkquavgRUZySn29t22NsJCo",
  "key24": "2pNXFGadg31LEHdwSVFV3yPW3o1vfqajVz269AUEgA8s7eSUps59FTnAEXHKP1X6xbqwaygA7QqZxgrdDgVcsS1M",
  "key25": "2EjcAC9WwnejS49w5yTTeYP2xMfyavxWGFZwkUTMExnWJQDB6v16eADddgVwygdDJ6z1ZXb3VMUWnhbokGEA2yAs",
  "key26": "5cmqG1AtQKP5NZvvfj6LLzdEGpocyeD8wmDwuj7FrktYzEZpkDavdxegvNmUqrpDKgr1b8FgnpQRMFcJyhKm7gzG",
  "key27": "54eQbikERTPMcZtyi24iesq7aJt84QHWNVjcZs2hvc2NCTfovMRyrggg8ZfnMmT8TLy8MuQ8X1RKLtQrXiTFr994",
  "key28": "3pfG2CCUPJfJn6AAqX4UM6sDMJA7AyG8fYv93P4BDap2MSSfjtzWmhWBAZmANnWV8nsPHAFTgHTSY97FUTnQFQoX",
  "key29": "GyRNQ4oaAo3KnEQnBS8op9DhRtugZ6bXebuzcqXJr7rfsWxyAuDnxAHuTmG1nK5hVPsQnDRnLhisqAu7c1afe7C",
  "key30": "4c9yE7p2JMKkLr3Qc93GCWDzecmE4hHLm148PHBnm9rXgcCvt2KyUTLuxEK4p3NF4maYfa5wJLagqD6D91zW2xBZ",
  "key31": "5wmRum8Xd4vUqDcRU1gjq4jseVRkyRRNLL9uQhvzVCegz9HwQXf27Zv7WQzZ7xqoDTmzL6Wv3eBkMTnKepRbXWWf",
  "key32": "4FLFmZgQg9veLA6KRRtgYfNtno9jZE7zdTGbRZn6zMcUpKF9RuK5wHpNwzsT1mKu2qPhoT1zRpyvQcCggT9vibHU",
  "key33": "591WoMXNVYK8XShR5mv1yaL7sV5N8BqwYrZT77MZiwNcFBxGUirTiKYmQeevXjnhdsivTzvQgaNYz6RAwqzwKNJ2",
  "key34": "4Xuz8kgxEgoDuix1ZsjejePbveHEQfYk3uyEHSBe5DMGBHxabCGmrvwoqAT7JWF6FzCxgjLihDU5JE6q4cDpeAmW",
  "key35": "66Er8oD8UPCBBJHUAqrA8i41d8zKGDfMjzCrr4kQLzHRQmsYedWjF5NcxCHkLirgmvDtyFxqRQaKfGENd4qiEbnV",
  "key36": "4mV7ZR1H241ht1G2eB7mkAxxk5GVksRow8EcTCGr9sgAuDuigbDiBBakExaMtN9rpgFef6BZdVVahtupL4oVPpKt",
  "key37": "3DVz6PqNRrnoMdvcBVQNjFf8MvJWEnPEpKGJfwhDVZYRAo5W2NgmWDxrPynccf2kKLBuE6JECTrEx4bVVF4iUNsC",
  "key38": "4YV4paZSBLjD9BypFt8VF5sjkmJwu87kBZVB8r4TNYeoSaEGyYkFkSgSdkiHi2VKAiziopx21GrpAGTYLAPkQCjt",
  "key39": "3pYhVJD98hyeafVYCe5fhg2h8uvsNUSXDuenTvnkh1pbmGhoNwNj3SXkb3XWCjWCfp6bxnieUEtWWLCyFh4Urv2Z",
  "key40": "5Hcme8GR6M1fuiQUGHk9KefAdrwa9fTpFebtYuf8hS6Q3DEAHWhfSBnpWG9MZRSom99EE9AY6LJ8tQpyWMFy6DvH",
  "key41": "2ZuY1zbbcDJGUnNwugt8kHQRkF4VrS6fZNuvAzGTr1DFURTRT4DVk93rheZbePmGUFBJgRPNhB6QLU3E56pC5tEV",
  "key42": "AWgef5LBPwYb34Dt6MUUs4iHbXiAJnumtzENYwePX4k3H6acBYVCwycM7C6h4QDgsA1qigfkEixqaRfzaoF2Lzj",
  "key43": "4aT6UR1N3bYa4CqbtJWhZAAZzZCG8FdyCFJhWdKgSM7Dcq7vehjaco8PQMHD9SngwxpeMu2HPyQBWFbBWkzTntSb",
  "key44": "63r2SBApjqaqtgrGW2yqncj5PoCXoy9pcexVGkBknqiS8yi7YdheveyWaMPprBFgXroe9TPxbidkS63NDPAdPPMa",
  "key45": "5uBkikpKd3oDV54TdVm473TwDpzMXEUnf6kvwhQhV3XwGYJnVY41udsYK2FJBacbhuQ3jraiLGew5F5dNhYKYt9Q"
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

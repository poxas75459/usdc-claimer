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
    "2k8CU9pQ8D9YoWeeviD1PyAZdWhUxcbmvuHCoKihkPPTCBggoNX24tma1zKCjJgSfuQjxKZ4CYsYyD4tvaheuqBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BtSZPpDApA5EumekUt7yCfCemRqkEEnMX5WfrftRpqdw71ZAJK9haJnPTx7GWgaGWwnPEZXzeQQ5e9gffpXFkUd",
  "key1": "DpYTJ8TjFRNJdwYd5vXY8NHsUuySmvy2d6itJqWUYy9bhYbRnAFcYeTJvVp4WypuhfENusCguX18d7ArfPA1pDx",
  "key2": "5i8e6ZpxYqkwpCTLnLJFv6pGsVXZ8qpii9HCCUgaixM3xGxoowJgngAaWVGcp9CaGhiBeNG9KTRNHmbhAYowH2dK",
  "key3": "3AZgUnmMCRw2B5P3jwzKFuS5CWgiU4hs5i2ghxiP1DgNWvc1SvPNRgAqBaVydkkkPBfECByHwDb8JGggPnD4uw7a",
  "key4": "4ozapPDL7iy4Mj27GYqL6ECFPXSm1HmqXjogmBzgErJLnQ6icmcpZLoQWutbZkQYEVdWWhJC2W4J6oP8FGCVRD2S",
  "key5": "hcZzkscCPX1wJ3dj1AsqbLupq361GnKixnsegZbHm3cngN82dFxdqh4QPftWLFM5ifukeZz3az17rVkc3TQwX6R",
  "key6": "4Tvaq2LeqMAxhBeSkERj4rataecjNTXjtb4RqVHPzTe5JScuiVEPupfVcCsj4ChJfbGf59onKFKoguTSyQF82sac",
  "key7": "Rt3Tpcn1ip9jAFKcvbZJnfuJ8dME2NJpa44hjqQzrRqRnG9LtwWRPqZ3RVGFwT1FiP5CJjNUBqdpFcCaVFcTmZ8",
  "key8": "2Kf31kivZih27srJFswv3rPWmMF8iG9k9CFx3AcqwBRQgKdJWMKxEHzMDxQv6msB5Nn42q9A885o9bXLJvvVZ3he",
  "key9": "dB9ygfASzKXuYZgBNj2uBVTXJ4KcPSQxc5PNcycGxL3JekZGx7dBf9AbkKoL2HeE8e5Gmr5piyQMyapmQ2Cqfx6",
  "key10": "5tNgeQpa7zzZCHdt6DqSq7AdwwKSFQT5YLCTfL5ocF5xTB4gQwcTEE4HQExb3DARJqfBkPYNJ9SNDX9Ktf78XmqT",
  "key11": "3WfYPFhdHTkh4GtvB5QSFfmeAoQbofiUenFnJejTzcqSvAWdGGVsVW6jZy2k4He3d8QPDszv7VTQoxYLSaA9vUdz",
  "key12": "MPCNSYEi1HQpYBjZiyXbm5yk5TKybmN5oAwDWBEc5DtV2sHEvzpcuHCRCgtYLFWDUFMwynW75sycqrEwrqozsAk",
  "key13": "61hz9AH6zznRxuTWmHrHrzP3NxLYHukN4JLHeXWy4onJ74U1v985SxHbeAJbTUg1eNM2DHh1ah5f38MZcpZy8Wto",
  "key14": "RuDzh9gCyFTfHSEnBcd2i5KRDCg7NdmCDbU9DLwTFh3XmVhTDidydFNq2m3Sv28syc91yEotduBT3ooPVqLGUZF",
  "key15": "yhxd31G57aMp3EXyJupparKr6gZGJ1iuWVADTQWx48U7qC176cqUbXX9RsJdiTP5R4X5HdMTo3niG3UnRCh5pEi",
  "key16": "5rWrsQuPSx3u5QekTuo3vwu3sUiYqqk5sQA6jyM5GivZGbz4UJnZtSJCrgXbyMxYRSMEZaZdAK5YR1KfDWdbwkWM",
  "key17": "4hWsSK3HNHbY5gYw2C5sPasgBaJgGzsZKirLSKLVewaeReVNtRokJZ1WmhAGmCqwAKcj1qaYDaEUVSD7PuiKRHH5",
  "key18": "5ujgeeBkZeutndDjKJbPMW46nofxd3tWxyUpZmAzwm3Ds2ih5sW6hsrDbUQwa42spgJ5gq6G4xfCmQ3SMYbNDTMx",
  "key19": "4QdnNsX1uXiNnRxrB89oE3rZLi4Mu9YP2DYA2TV5Fi9xw158xGtUB5GQJb9dKLMnZ4Y6toUsugLSFmcML4HnhGuS",
  "key20": "22EB6rCrPoByw6W64ZjCt3KY9myqKCUY4urPDabnAJXTD8LFVQERT3PWowaFTH5RfEwJ66weKJ1ykfF3Lj1qF8D4",
  "key21": "3ikuKxXUVTr3vrCJaifcHin5TJDwocAXMxDM9bGmSPG6Djp3LreK8XQHjN96LrzB8JahLV4Te49K4ZW1eM67c62n",
  "key22": "5UV87ChEJQ4nNnvDRsGKxQ4kEsipz3rZ4XVF1rFmvDcXxjX3wC1iGqjymodMkvDXwGRvMsTHThTUxfAPx1K85V6z",
  "key23": "2aBxVix5aq3GFeWZF4Hd25DCG27fTqf5HYH9StwkjiV7eRp6iM8xPvdCRa2D2b1nNJt5KkAkXdSywdsPvJ1eWpZ",
  "key24": "JEsj3iVRFRYzik7STqnAFUn8WfeCNhtfYVdX1xpytQNZvUnpGvTyESh7VHR7ykehy7UgAyjPbetnJ3HLjgCPpUy",
  "key25": "mYNsVXBuFjvTUP9R9EG459xAm8nBv9u7pW3247vEQFm8H43VXDPu2GBp4JNK1jK4XzPRwsngr6fKe776PxcF4XR",
  "key26": "4WNdZ7PDGnjcDhccf7SRJU6FPzSJpcyssb9SwAXitrRuLCer6vpZriNYgkgvKCqQ4nH4iZ8DQ2eDjj6gaM1gZwTJ",
  "key27": "5cCYB25FKgSrYrSvEjhb6FdQ5Atq4bjR4ZeZeCsj75EFpiXQGiFvx2TAStT1vYpLdJT6jYA3SeGKWKyBp8N6KB5c",
  "key28": "5w3fMLGE3PdeZF1zQ7cVaoiBsCfFVQK3xarVaFFeqKZmmjeNy8fdFCGncA4ZND7qBokcFSM6ipuPVtwpTx56ku1G",
  "key29": "3jAJ8Tw2mrZ9bCha1eApFZLpUkq9D7VduxQAJyfS3WGGiNBqLsVjxViM4hrJiCRpb6PzGvHs5Tn4W33Up8T6vc8T",
  "key30": "5bdTa9CfKfHkCHujXq8yy1r8iQmRELSGMndd1APa5LPwssoH6UHBknxRvcbZsmQyfRQuYk8NEED7FDGx9B8XEySM"
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

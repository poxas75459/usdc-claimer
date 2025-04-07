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
    "5wDe7HZbamWjTb9a4zpZ6zVdMRzrVMuUarZ7PWqCs9McxsN2iaFaktyk99nN2WTukX6mSPmvaR5ck6EUG5AASQ8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yCoEqXYHs1vxWAZHAPkyZMJUzdgcvMA4zQw2oQKoR9Zkv8JQD61DCyC9E4MqnDU8sSzDvHe7bCR42S4A2kx7RYv",
  "key1": "4fPVvMSW9dCo8BCSFctSpakPBDZudoQjtZZzp3h5RU7tm4JSkM5QH33qD5UD1xyybULtELsoAvYWMc9F3WBd1xzU",
  "key2": "28SHVCWYxV9FwUtZvUB6MZm7FdWUg4qEUZjKsbp9zbXzVMiX3gQMBD2FMguBgWhPJB2tpqcAFgQnTz6CfbDG1WpY",
  "key3": "2Jm4Ej8ab6kKsUszs9uMVAqwGRej5WaZP3uNoEtDhD9YB6AUropNTgcrbWpJwPUfWG8eVWGsDkBvA2zFAKfAn5Vg",
  "key4": "3H4AfTSae9BsKU9WLiAyDARZcq7xhEk9SPxgZmQXnZLCCgmvj3bpg6CcBNHcy9o18NaHMWDiXvbsW35kpENbwobC",
  "key5": "2qBGx2JLXdqbg2HjngtVStqFYrNyX2BPbaEDs4wJfHWSWpb4rHd3B7YXCTtypXNVUJCnRsCEZbipTcFGWbGURsZV",
  "key6": "4F61SzxvoEj4knBrrCAuG5aFUsT6VfgQAe6wStaN3TYdNMNnYfGv2RtNHpWomFcPVQowKLz1aMNK36j1qgUQD2dX",
  "key7": "4DRi7GbsR2dE92mHuPpQSpG6rWXPj8vnorSwNKVVozUNtY5CZCJoVENDvgNeE4px7TMVWGzJmy6EF5RsquBL9BUM",
  "key8": "2Y8ic8hEsQUCGSGG7tUaCvPumBYMXEzi6vVd5EiyBDy7BNdMqCSARZih7qCjLPekET3pjtngzHjX3eYztsD4fY5G",
  "key9": "2Fc1Ae3tDeZg3cxcQJGQM75GtmyQhyV2z429BjLh2xY6gEna3XqSjFweZ387Amivn5yDtuWoyThEJVR4keFk3WJf",
  "key10": "2vdid2D9QSQjLfDcAwQbFFFPbti42MTXdqAUzawazL45YEufLvCVrSbxPxxcLwWtA1dkyffE8wpe983Li2d8fFJU",
  "key11": "55Qd5cciDsgYRDT41VxqNgYcbMSzRyaccZi5SMAbVoDG9HCHKus1PLG7nWGEdUkr1Juc3vFTo4MWhzvtiUWTCp9R",
  "key12": "2tCF4x57zzARjk5pDdWyGY6nq4qSsZNmpgo9LH7mwS2iDnki46viYcgweqewUttQ1aw8qNMJcuRFfWEXvo4RPUCz",
  "key13": "2dsanUt5G9P5xrjvUPJwU2mVjjXiFxWe6b6cUe5QToZns1Fpus6HCwJa88B1inqbuHoVsNwrGfMB9Y3RTjbj3Avb",
  "key14": "2W7QXYqfRBmXQmv12rNjvNzms2T69CXeEuqF2hxmvXS4y9jzyCa8aKaDacj9DAT2M8778xxM9b4uCgHMCDmchPmF",
  "key15": "3UhYw69BkWPBpfE73MoBBdR85sVJT2gRMqgRy2d14KYSr32xPMetB9HSqtmch4gTfCMqpct7dvih7VnUUpWMSfsD",
  "key16": "5TTTbmEhTLYDCUpyA7c5PPi4DEV8dBD9cqmLnYoYeuAZoEi4Yyh1NeNdeGzz64NTHhsjUbTFbz6pXiaesMM3iSMn",
  "key17": "61AMBz9MPgqTQgA28XsD4iSzrLsrwuvZ3kVBRccEyBVZtEEcBWKCoG2d3Tiwq6wWG2HEuwGENtbcKGzuLJ4GYg2Q",
  "key18": "2xR6entXqEjdQ5MpvgY2ybcYJgu7iCKejnDBwDp9Fg6yo2c9WXfhqTufatLpD7dxrqB6wCXZWnCeiew6oZBqW5Gu",
  "key19": "5WB4fv6AbNLrsdYMzckVXn3Bh17NRfD9vC1WHxDaTCtxFLz65bnGBgrhhAbs5Soarm4NC3jWbbZNBPbJjde6686r",
  "key20": "bADZ4vz3fp8LqyE4vrEsrwL1LEhUNN1Fzk5Daoh1nYWJ9hDnwB5F2VH5eGzSMdDyu4HRkoGvteP2AHjGKNQtA4w",
  "key21": "3y2TS6yDb1G2hLr5RPYAFJmc7WcULywxcP5SrrA8qZ8oJ5mhbhNPWN82XiizxDab8mo9sECAJq1SeLttTdpvHBnr",
  "key22": "3rUuasPcxv3wg8fPQdkAktsk2DL3pqte3CPnFYDjqTmiF96i7eAoVKAuwCdJKSwAnFQ3PyM84icwQYWn3AvWzCzm",
  "key23": "5KygJ1xKfd4naz6iuRKiSDqZYnLTkwC1FXVib3DbBZ8NoCo6kwyLDzF53AgY8FgdhtDit9LeDZ4mqyJ1WvRK93TZ",
  "key24": "3aVwCvDvhpnwXZTp7JsMDM2fXoThq6mejHEAYARtegu3aGFo5Q4oTcyPBGiSdCsW76xsLW8ERgkuSVNwXe6fnJwt",
  "key25": "4rpnMNTubQyiuiEgr2rHLTZtToEz5zezsnnnPtM3uqmNtkaUcgXsGMQgeZ2aAiupBDacQb4iXF54qycr5kLyKsqw",
  "key26": "2nGga2q786qgaaCbpTe56TYisjvaqHXqQLFiwphscvX8UGSYyR6DMcu1Zhi292oPfi8vkZ57TRbDazj1NqrKnSU5",
  "key27": "9hQ5YjLbvxxrHwrAwnvaAh4vPQ7y8Bw6EYk32tv9T1zPbFLHEZeUPNSevU575ocCAcjstkpD9cTkNSUhJYgoFxo",
  "key28": "5oAi7t9yKYNkxDxTmqGZ37rQ3gWr2nCSjXdS6MLqjZ7vfB6X7tHNpVfsbPPrLJy7tVAEKTRJyYfxSLWYtS1HEZ9o",
  "key29": "5Qz6AUZYEuVefLPkHcg5uk8AS48A19B5Dvt4zhCwJS6Zj3uYRKGmMSMTnfdf4ubWwLLjKEzTezEvBcrmDdA9353S",
  "key30": "5nVWApH2zUWKCadh5UW9D69GiXvxuitdpuuzJwfYP3rKEuws7BdriD6BibuAPFtnkgnKUq2D8UwPg16YvVFkXuQ8",
  "key31": "2aDz85P9xsxYkWokVV8EbfeuKew1h2ZNTTti1mLPf7woibvDAbG74qUZCRzkeVoaNN1EfXpGQNLzqkrn1F4xSeGo",
  "key32": "4P4QALa7NWCcU6gbhXVnoJwifQuRLEvZ3khAKiU89PW9ggeDCKJjN6yUFTaY6UsMD5E3GFw3W2LkVatjjmiTFWkt",
  "key33": "36sKcWrtD6qJX5A6JzsNhisrcDj8fSi8VPsEbV37VFqv3vgy4jnEsrZTrhBqk82d3vZ2oBLdmAxLFXZNpJ6Mrvku",
  "key34": "23PTLBP1uyJV9HnSKLN8uDW79GtDqR9BL5RzrGhepkKZ78PemNRAD91FpCkWeVYfuW4JS8x5bpf7V1Rhfs1LPYpK",
  "key35": "2dhbeAp5WqiTApbM2FEbnPPv9oUAFe1EHXPj6WPterPauwYAYRUEzQkeqL7B816QKSD4heTdbeLFAXZUkxq2uLEX",
  "key36": "4N9SyHUbKoBUojJufRf82NSGN7VxbSdfwQf9pp6QS5QqLi7Aah3mL7JwAwBJWvsr8gFomNqP59y3JbUwQE72Yyuz",
  "key37": "45ozmUnZhDjfJbvUscMKSao33y6jbN7xfGfgF2PYvn7QGUJzNUumDax5ks9984uDU135wHticpPz9STvgREe3zj9",
  "key38": "6jryTN2mapzBKTV9Wy3nA6ckJHm2RtzTL4LKwmnmgLTiwm2geM9A1Tntbp2MfM2m7KqptVbggTyYvUAMrr14aYe",
  "key39": "4scsoeySXSk4ayAJRb6am3vMqaGxg8pEUwvUuQj2QNCqAtHKS1bYRGBc7Vx1hTvUPtb3aYVTSAVYe7R7m1aMmvZK",
  "key40": "4zwJkfTdeoBtdA57YPyvYZ4Mwb9EYVL4XxF36tz21pjAhkNMC4yAVauY1bcxMyrarKt269udesBLRR6B8DPcWEAa",
  "key41": "5rkPDvrFDmEVdubG1FPYLuMsEEvgVigPyx3Wvwgazc45bndr1tGbHhM3rqPfBn8cKwFFFx4RQCmZFxsh1csMu18W",
  "key42": "2rroF62h28Ce77yodRpSdU6vRtjKSnxzb8FJtDtg8y5hkc2DSiEmXAmToGJTRS1nusY52Wu7UiXVmm4wpWDDGy3G",
  "key43": "2PHBa56S26PogaGx63iCFMEAzPLm2YakmsCW5rHMJowBvsvPCRWuKf7hfogXgVZVGk6FSEp1rguLkqM4ApmPgCw5",
  "key44": "3DqSwg7LJDqsT3fhFgMC5BsMj4uuCCJQUaYBjn51o9FTuMkNca1L34NMsLbZx8MZ9afGSxdECJrfnvuPuCix1qMY"
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

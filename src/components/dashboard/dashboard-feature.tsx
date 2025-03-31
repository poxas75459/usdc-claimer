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
    "5hH6dj8BC426zrPnpSxDxjrSMBwRyQfrcuY1jucvknbra1U8DUgfpa8Pwgd6RRXTYTkZS1c5yFAe7YLZ28g8cqLW"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5uKCUaRZcdywM2xQ5g57Ew1M1PUfmAh8C8yNK4qK9ZjyPqfCNSWkLReL7AFPogQ7PmA486r6nfHJuWe1zdTUgvet",
  "decoyKey1": "3EEUdFQpvtEvxKtJpvqxVUhgkSk9uj44Zjmmoo1Lj2oLnoGBbGhhnaVVosxsaw3JBFC1pp4WxzuFmHWDERWGh3F3",
  "decoyKey2": "62HmaLke5vv6rqK4ULq63GxzMe7qYvfjqVfVaoa7DM4WCMJWVLUyU6RmjjXNvtcsic964sznF3h9nmEighXStsz",
  "decoyKey3": "2AnVQwp4vpHZ4qNnFpPUMsfK3KoNZxLC8VB6uAxfqg3PCEPBePZPXWytoCfUTbsU68FNL3qoGjK8BrdeW58AFhRz",
  "decoyKey4": "5tRGcfXysh5P6EjmGugC9HWgv3zn4KAVi1Ay7Aex9UYXYwP7KZMih7mVj3Ktw4z6ZJD9hEQo511SDvQcvsZFDqiX",
  "decoyKey5": "5DbyxsvT1YAwcGNFeE1aQk6ou88THFxrDcUDwu4ZMSKZFG7ps5oWU3SAdjKtrDVkU8nFD7U7QhLvSYihpJqBRp6U",
  "decoyKey6": "4PpQ6exuhvfXesAbk82SgkBkwzQkL6iT9jWfwwZdtToAABf4NVfHn7RdR15WWaSp1kpdd3Avy3Wxr8RRzoQmjWyV",
  "decoyKey7": "2hTDWVSzhcYdULcBEfYSYvghx3w1yaXx5wmfNdByKhuJkuqoMuHkCLFdWNt1f1VpL6UNsNToQwfeiF491dgYxKsi",
  "decoyKey8": "21hyniiFYQuEryr8jwrvchwskuyF7rhJdjcnVZ16xS5PAtBDjyJLuUfiWngZyWNNAvjApkNtvJpdoEPfWQnKz8Qr",
  "decoyKey9": "5ZDuXR5gro6jzf6f4SL5Lp1WdL3mFYT9LEofF8k4K2W57WQLfMUHKrRgkvWQYgByFGkDxQnsaJbEMLb5qTE1skZ5",
  "decoyKey10": "4koKnx4G7RhhPCDVriPARdAycTyJjSBErwetyrFKCuHR1LnvYd6cTZeJoVniCPiNBBVV75DMuHNibKFYmn83ftho",
  "decoyKey11": "WHLKANGaLwYZGMtvMCDeHAzDuqhSuTmCYtCTeURYoEA4DCJZeqhycJb32SX6M3VnpUoiSNGMtgq3txHAP8pTHo1",
  "decoyKey12": "2KDkbDeSAPBTxFkufXrdbfCDbgYfmECAWzo4wkdAJNP2KH8jjVU7zLmuCWyU4c5spA5PhVDDS7Mnn4oBiPPfYRia",
  "decoyKey13": "4SxjSTzA5wBMgdVRfg1zcm3TxRnbUeTFaHTUVKsWuwQgBwLGCGyfUzfi4dZ8T8Tzf2n2SfwjDLPaofAFE9aPjjbU",
  "decoyKey14": "3LfdDwThDVkVcd36LjhuTzPQeBzK8QzQ6JWGkQjnykxAFTULtE2oTDcfHQd3WW6n7HKn6HK3oKFDmAE7j5T1wM6",
  "decoyKey15": "4KTWWX7xfb6r46nUByQz2vReU8cVB3EyenTZZ7hgC5xH1Zut3TBLiekQkysFpkEW77siBmSQEL6TSn2mbVoH2JA1",
  "decoyKey16": "5ZowfRpSCjfrTuLPqL358vSAczRH28RRL4i68ZBAzzeTtEEL7AP1mkU9DyEH8PZMXa2ugufHBcfQbV2budFXxYHW",
  "decoyKey17": "4N8dhxZ2WXxSie65s4uNRqVm3kVvX2DDUiZkWvfsjUP9kQ2xwN7QvNmJAQdiqR93GR12qoDJS5UUriog189TCXzT",
  "decoyKey18": "493qfRLJZPqWLkTZKUH5DPa295zcBD2Grt52QWjZvrcbAVbAAMYku5RfCb24Qw2UJCxDMjsPbd6gozBKGxXTeskj",
  "decoyKey19": "46cNifgLTH2UK2tjHzFNH5kZtk8J7T1HUYAoAKwUrJWXJ5YNUGGZPMXaCyCC2oewZKq4ebnFbBUGdSaprQxgq7xs",
  "decoyKey20": "5XB5k5wj3szmtjwfY89cYvSTv9XAfwJ6CfVPfG8jB95XTXQ79T9cuEiAz23CUtqVpiZKmTRj36HfYB3VV5AdpU25",
  "decoyKey21": "2cuwEvxCb5cFsDq5fAKAeVhkVi7S6ipNHAyT2y3xKcbgjxsK3QPpY73LkNnou6k9CHxABjCqC9pvGLqu87Xmdhuv",
  "decoyKey22": "pEWppfRDEZ2fmioaonYjCjamTJBx6kuk5UyGomPDpPE4L1Lw9rrnyhFG4mcf9ch2kWyj63JpZtTzcb5G4uxbVBQ",
  "decoyKey23": "5KQrttNyxbxuZ2hQqQs5vZJE4Tyqn4bUNHkQwAc7AYpr3GCdc9nL3D3P5QzEjRZRByXnq9eG4gHS1PWZPD9oCjo7",
  "decoyKey24": "XZt7UgoV4QvdqSaRoHKL7QmXeiKDmhmbKPqEhRechmv41CW5UKVd9ZFv4Zgni55cBRwid6GkTfDYyLJG6Z1triQ",
  "decoyKey25": "2o3zY28LZUKEP6MQzvUqRV9ERbfZY3f5JSPSLw4ingXNab3QXqmRD3AB13aaFxn65dEb2h91ynHmMMbpEnS9NVPy",
  "decoyKey26": "5z79raMQsxYGJrRphzRtbBFStfC5Q2z6EVgJx1MsDZDAJiSmYVhm8r47FDKPRMUF9Wm7sPTvPa1U5DySrz2uDjc7",
  "decoyKey27": "3z1tPz7pipRN1hoschQnZzBUaXEpH5uL3ACEAr4sxYNDkN2B73X4MEC1JbgRw5mbJaDdSW9FZftkMqRPLuRNM1gW",
  "decoyKey28": "3wHFJ3gfjWejReu98MyT2zaURNbU7wJXR4JcyW9UBXiYy2dKqAnSDAHb4CmmtX8265woGqk1SjowuVDbKwyaxacq",
  "decoyKey29": "26eqmvp6pfoT5o1BJwayzE5uuteXJiTNYwo4Gic3raQngrQiFeWGLorXJLaPLp7BtJefnMF8kEPHEbj1rjeCX1az",
  "decoyKey30": "5E2tTgWYnym7suWMiEuW1njCAoN9iKJYHYrQuPYQkkAjKUc74N6WmfUi7Jok1bgDMGJMfwvT4VtYHnEvXMedH7Ce",
  "decoyKey31": "2XpoQASoW77q87xMSNApFKwxNBsByCcqk4zS3KmYV5NCXpw2VzkTKWJ8gT8L3bzUQfUNXPu34bR1vLvpuS2fke88",
  "decoyKey32": "315unfPQM5bWmz5PBaGkMFm4UdFUeYCxVBuiLQYpDZndCF89csJVAitaGg75bcE9XLPqVh3DpU7sia8dd7DxxJAh",
  "decoyKey33": "3WhxK4gehuPqwS5dUkqLxPSuXacG3jAG667wPZ8ZQ3XrV6Q8gf271pxsGydo1h1scQ8GXTrsufdJbMgZiVrcpJWS",
  "decoyKey34": "5tJ1iC5EckMf9fwwomStHy92QjjtVxZFgsD8CpEJjfGr26u98Yg9KqdxzZ5mao5z8QR23XGQuZt1x3BwsFfKxPSm",
  "decoyKey35": "43hghzXtqGadR6Fnm5n5uhoa21AA9cYHuhbcrU3qPLeHueTnuMz8f9pPALhTWDXyu5rJehqgt6EsZCKL94v9teFY",
  "decoyKey36": "5eivhyx6aLmRf2gCYHqGhjx76cxiupX2cUmGT9ExscgHqBxcKEgVoc2FBqPRLUEVxNyEqiqwi3SxLseK9viFkixn",
  "decoyKey37": "3pYardjXHCqGMLgT95GCH1duzXZwYtwrgA2vLza3XESqsNQBfWekR1SDmSfEixwX7YnoVMrZTCFW383pfyi655KT",
  "decoyKey38": "4S8U7khEKmnKn3KiQvejY2tkno1Ai1Av1JvMaauqPi6Khy3gzBPrfrkJdZeQ8Rg8CgLBjAXmoEDW2zMSrWZM9PF9"
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
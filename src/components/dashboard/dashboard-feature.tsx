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
    "5yn2GGiAEr5dLTYuWPs66JCpfSXo7heVnek3GLw2HFVAuGhSJMKDuPyytdn9Mv9GmKue1vyeECMrYfgiD2mwcS4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fCXaJcDETpLfbid2xtEhepKWZtfCCY76N7Lwr9CPnjSfySGBSJxXk5TURaY6RD56t8K9Cu6oyfag9FLyxxKa2mw",
  "key1": "5MQz6nmFVdHwFnoJeJ8N9y5Rj6CFbUVQuBzMDN8w2EqUFZDwmmxcj6tkMbF1JTiDY7SaWMoUyptcFdimrqLWgQJz",
  "key2": "5En9BUJwj5vNDhSz47fLX8Gwgy4MYHjqu2TZGPUSMmwFrGtnY7Sz1o3uQ2oGSUctvJAfuduREJdqkvYtZW86zV2U",
  "key3": "3vErSNWGrKQRphehqZbC16dp3RAZG9nprrARB279UcVnWvTQZZXg4haTFLA2rLvRTUrfyVBXCYzFPatYyouvVkkt",
  "key4": "57Bq43eXVbZ5PTWhCPSEULH8pXSxhaY55cjRnD4Qjhc79e86iYzTBimXsAi98HsADCKs1APF8irrFyFsYGHWZGrv",
  "key5": "37QThJt4ehHSrmw7NQA5rhdPvM5BhZttxtgaHaXD7p7CKDMmBGbW8wa4JtGYHci3JF2doiabovnpyvg5NYQugvDK",
  "key6": "5xTRGUxwzMQYZfFa2QtgXX1CJgNCYX4KvVmSRMz957kkEEAq8W4bMPVkCsgaixckmDBS6y6tDJpNrBKmCcZdYUYb",
  "key7": "2jVY7yQJKeDc5Kg2ND2zSG6hcXNS4bPUtdYaYkM9MEaxfmJv35GoBsRN1FUEFo4cRwyuSDXpBdW5jf43X6T11MF7",
  "key8": "vo7ydHLatYRduqc1oAN8RUeo6FfKchCKGkQcWpivEZL7V689RFWzxmwMVgWHcoEaKggSkG9QfSCDv4BAGR35Zx2",
  "key9": "2n9AF5MfZt8cz2yq283fpg1nEAf2xedvUJkBnDejkZCqTm8QBDc3cBq6NUPLxx3b1iUdqhqXrcBNVji4sjezFwck",
  "key10": "3aWZbpeFbUeLUj9cgfw4B5wFAwZgwiHhHmuDhg7Zue6XS9Y27KTAQMkudXhx9mazYu7veZH6zr7QESf6p3oyYR3C",
  "key11": "3UTF11yvqREN6gUtLqRW1xRHctSPXN1vVNZDsRJza6soLUWzv4UsYDkhTNSiG2igCgDcJAc1muybHczHgpwvNyqT",
  "key12": "5befKhaMp8sQKjvRx4E4SHMsTj2qZsadrk8sZzcSBBfEa4VhF9wXzNBU6zv6waJkoo2R7xq7GuieWfEJ4GHz3TSm",
  "key13": "2FCwJgnFRxUosVgmP2d5Bdb1ewFJn5zvYBEyakSW2Cw4rjca3W9TjC3ZUTY4d39vigrrSkGkNJhxisE2EF2nxYMV",
  "key14": "3VqGFbQWT5dXGU3vuwhzfeLCp5fw7XYGqjpD2qmvn568KeiF1fgyiJqSKofMeezJMUgDB14q8iGm3mA7sUX8xNKg",
  "key15": "5XXGKjV5DcCm2NXNDP8r223xDY1kYR7gpTFr2wzZqHpu6EZ8AResEK138hymjhd5jX4BEEyuV12yNsGHZJZxW59e",
  "key16": "2tgzXDxyqUyNDixtwsMCkQTCthFybG93mD7tirC56EKoYHLcEZGyt7BnkEkYNkFethZTwuRYG6dP9fYUqLon5Gy3",
  "key17": "4ZnJzEVtcn4krxxu9d6qXQTVHdFHfUv2cguoGBZy72Am6Mn8MN6kX7NZsXsKB5ea4VYVbbP1fQL9ZoE3oLqDrcDA",
  "key18": "2KpoSmDg6siPJko8QT6MV1Me2jDCKxUnRzhgpi4NVVvQxxzQkmYU8z9Umb1q4zefcXZ6G57KTWT1TAKJ5ZEnKvz3",
  "key19": "3wpsa8TBMGsi8TsCmVM4d4EwnZS1LKvhuQUyVm7fZxhSMQpN2mVPiLnFLsf91m2kqmppPYoMaXkaFpQZvZhXaMek",
  "key20": "56yECiEjeTwa5dWsBAZSWZKHLXjA3vSog2t4rT3aPznztbshzRHsakKpprS6B4EGq2fHhCr6oSjDsjmj3fRr1yKt",
  "key21": "5X2s3y24oQmfioGWDMcKspLGve31kiwwW3ZAzgjdzZRz2guiZ64FdYNC2GL5Zdiz3mVhEGa7qGRbuktTZMKCzyJw",
  "key22": "4sb8Gv5xWEKnTED696tYKN7GUmvi6EKP1PfN8iAiQ7AEyG1Q3z1HiBprBcLxgvMe3m76BVhLAnb6Eq1wS5Hsi5UK",
  "key23": "2gmvN2YqfsLthrMqNpKC9GfujGanYCwmvaQoRrXTLuPhGYue4yNhSSmNTMZWWPFKPpZfHebMq1RVKjDGMMjQB8TP",
  "key24": "2KaB7ftpgGEuNQDVViurGRDaJQ46R1U1gQqyjZpw8NgLU3Dv6TzxPRbmeKma44DwkSeru55C4xz5gue7yc6nbos9",
  "key25": "4KKJUXKbMfNeY3sR52MNCYi1rbCpLm4pM5cw52E5pmR7mHyxR6W1N9J6mjgMNoJWx36JKo4ktDVLu7pXt3dDH5xP",
  "key26": "5fuoyeomEvecF14CsJzBZTX9QeJCRkbwbgaPMuhytG5YLnysSLxnQKDx74JJVZ2jejcPgdY9xVszdc8ee6QibZk",
  "key27": "4SSXUJBntdnLMggmmgsxnyzH5uCAt2Q9M7GwmiyKt9ZLNhedV2Wzkjh7uzkEjH918FCYzhN7CKcat5Tyz2QD1VNL",
  "key28": "33uGSwxGyGKpotenevgBwYwAxRSgdoe73j72dyqTjsshjQPMSeyXLyMpViQmw7mh9myxzuZG6x9gH1eYQqzwcpoe",
  "key29": "3o2Xj1yRSfYctHMQiyBHbBGuDTV37yusotXaNASnQFSgJMYmepzrjRd79bCNMYxjkKDvjiYqcUcCvFV1Qq4GBPAR",
  "key30": "24oEBosyAsPCNdVqQhTN7jmr8VmPRKPPaTru4pEbVM96JE6hXuUvuyZrFyUE3D1ZSMaSFmZo96sVow9cwZZRs8YV",
  "key31": "4dtwLnNeEmxANBiXB4NuGwauuNUpz8KayHNvkcVQJs19w4NdJfJoKmea4tTN4TV5XbJCK58wepskppKEQLauHAm8",
  "key32": "3NTBt9h1858oRnVYABHaqihMjtTsvuitUVA13xF9VmHSC57FGX8NKXNbD6gHCoS9nMzEfdpZDh5v4sBqwhEgNsLU",
  "key33": "3QegUH3kXfVQ4wK5NK3ifksHEXKjGDaN7gMHY3B786B67JR4W533QAoamSsEwmtcFAgDqsJucaxfitAgz7Lhy1Vi",
  "key34": "2GkRyZ3SuQvb57Jsh3qqnRFjuvJsBrxYyczYtJmgxedtrzKbZvvsLXgC5idQ6EAB2cjqJD3yttsV1BxvmQyY4saS",
  "key35": "5Zhb9YZWV35859T95Vb3o9emDBtFP4bAhiQBngajNk1pPa8ytVMV2gVscCR8j3v3gaVgwgw5SUuu3xkHiSNfbJv1",
  "key36": "3pKMa4uLu89t2MydYdvUAVT1VUWTeWx2Bkg2T1fwqiAGAEx7fsxLCurx57NDKCuRXsYjW2NPmrfD7GW4BLcqbK7Q"
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

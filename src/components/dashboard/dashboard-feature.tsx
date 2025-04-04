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
    "3fX7EaV6AtFgsAxUinsm5LFjg1m7TJdnVyz2uwKYbTb7AVbbCXASxxg8nf8kFvbvd7HtTFoBd2TZMdLrUXZ6TBfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K4tEJpVU6UBtuoivRR8jKAuZgUNJ1QiFAeVU1zc7DXWvRe4QifvL5CLxMdkP4earVg6J1fquamjdGrZmg1jFWfh",
  "key1": "2Ae2yk8VkzQ2pgRyhPMyq1y74zMekQNSzgMo9pomaCPTBpaPQJm5ne87HA3LvsKLpe9qwpmzVpTcyALu3gWFqYCc",
  "key2": "4gHHGxd5zUknpyHMgqTQM28DojoFiBCy16ymFSjMk9YVmDvDwsy5mQfHPWa1PJQW3T7LgpW9xGRRsM3jwsHADGp6",
  "key3": "4befrHmvVw11Hrn9FPEwT3YgAKP5eCnx75z6pg1HPKifiVUTBcY75Hh6yBJ8qqtdGL1pGUDt1wXhrmya5r3wox19",
  "key4": "3Jdj9gwRVDBJeSkPGZVpAJvKAWguz1Ekix1suV9S6B3vcjj1VCcpDpHYitjtmAUvH7wy5MCsZfArihxW9HcZBpis",
  "key5": "5HXS7jSek3odUJDCM8auMP3Xv4nvJGE2fT88Rx1VNE3ci7zQcpgQckeBiDEbo2eyxs2YrsmT67qqYJQXP6dKefJG",
  "key6": "NZzC2dTrwCrBNBVR3GHSGruRafUvgtDRQG7u4mXg8Wz38Gf69xHTcnJWEyMFXcgmD98FnqAKoUamKscWbQi11BP",
  "key7": "CSuqukGcycJEigWqJZz5TrAmwmB65iKiUz2LTNfThpNhsne93MGB9Qunt5Geebhfpwh2D5VfWcivFrdZBKkqDUM",
  "key8": "22Gojmnsrp5cT7vx7pJ4Eb5E4gJ9rbBPevikPiGe54QryeBkwKAbTXrof6uaWoyk8TS6anGA7pcXWNbPDcm3MyzZ",
  "key9": "1Ewzm6BydiYvGtBvNsYeSRq7p6hXZar5TJzjY6aM7JW5pfwB5sEibfzETt8rE5Duewo1f1kowzQMQd8hnehvZuu",
  "key10": "4EKqRUhF2oabSduUaoifXFxT91mMtFoTa39AVHpazn82hYQTR4AD7odxWEJF6j3VBN5DWufnR86QccP1uAvd4Kw2",
  "key11": "52Z8zg9WGpdEenvGoAWq5dkwpaCbxrq8K1KWW6vZeskh7gCo4gEqEVSHb8THsvyd3nXDfX3ue56iEhJsPBGbb5Mg",
  "key12": "5uoUMzny1rXjNs5fzoYiXjDe65VDb4zcqvBE65mNzQT4W5wRjHmApy9QUNx9uC1TzTGPrKGydkb5d6XsQFLPkLaW",
  "key13": "TiBGJdw5rd57gMMT6diZD6PpWFCUg1tQJ1dRvJ5h2ka8y5YPp7vtWttw6kEhQamZbnvgKytzkhZL4V69qeV7WAR",
  "key14": "3dmRNvh414jJjfyBHQZS5s7trs4npzeKv9Rb1XmsfbaNYJ1QqzPiuQDw2sUdP6MNkV1dehRxwy5VmMMQZ7NUP7fS",
  "key15": "5bXXvxwGqTQsuNsbWSSRVTjnkKgDScL1Wg7LVj8Ui5SkBRan3YFsDx7gbU9Th6MU2VuGUwR2qaS2sxUphNwVZaYF",
  "key16": "4KdzrCSG62fcWeaymCFNRKGn33i3HcfHk1PQt92w4gwrfjYaE9aZLu4qaXz7RQJgXpNybDyWpbFTdUxTBGdz2s3c",
  "key17": "NNQcf4qXSvqi12GJhHMrqmsoJf1Pd1dMvFHJkvGq4GFcT47cV1vxtPM1jgEhVygRon84jBn5WQG1FxPytM1QLcK",
  "key18": "62FeDog4oxTaekgPNE4f2RguxNFAztz4BAJm6k1pQ3e4BMJfyoHrFfawhMXk1r3MNxjyD6JuC2vc2NGfHHEgatTV",
  "key19": "wWypqgBmENAegSPKiBZcKZ6UPdr99ubhCTidhVXH65CJgR4aoj3KVVMn11Q8WifEcZfFxMK8pD8p8Ysgh33kj2b",
  "key20": "2x557Nx8kykbSeSNoMgkWeqbPC9Zz4TEN3wnGCLGKd2PUeQN8pLeg6ds94MpZiY5hDMAuGyh5N9is7P6stTq3umo",
  "key21": "5bjq2ZGANbWMeuacNCsP47eDPUYkak66LSXPX6QQAE6gQsAhcECgZSgDYvUWZbJpz8fSnpP3sVi2ix4GsSdouTDS",
  "key22": "516HLirPrus3BH2xm89TLfKEiJh18ShvjRXjitATvpYXKtimmSxLBVZsDtDmi6Nx6Zqn1n35hgrmmmib3yNsZjh3",
  "key23": "4uSjf9quXTwnhUf2HkEoZemQjRugjRdMQoZgRiNV52Qjo2dvVxe3eUyKYTWarg1nd5PwC6xP7akXBsrNn2Cbt4dM",
  "key24": "57GwD8QMcXfpdeczsb6ZeyAXiCcezSsVfgWeLB4mU8q5oC68se2zKo9gCkFMAkTBqRLs1GJDMZ7C28JWrYd8HnCU",
  "key25": "4bp7zv28nFfLbWzarn3LobPd1iwwrea8aX4zQmKdarh42sFVENAULRSeQ2Gz8EidWc7tAHcbypQvqKbhUQjWPV92",
  "key26": "4aJbwggYT6LjWt1RGw21h8rSCjh1fum6T97oyAvYcUd1mb4qq934no1coNVPFoRTu9PZEPFS81o6n3qDvHVETWGp",
  "key27": "5NpAZdehMyccmSvXr7mkVCXF5n8PabexHPKnFNioC1EiA3Y4Ju2b5b28bZ8Y6e59H3BgnQAypdQwycx4KR2udK5v",
  "key28": "3ZN1cwqBvk8RWKzNsSQP4ruAvsK9Xyes2fB5YxGDdMCYFsw3rLbydqQo665CrYDzT9qbego98GsvHojBBuu3d2oW",
  "key29": "2UsSLZFPhF1iMC56oNHa2mgEPaKKRTbaan7AhJtojGgct3ni26WhmFqnz4imqy5npzn9QEzkqa2TYxVWhC1RiUA8",
  "key30": "5uTcQSqQCMThcfQ2Y3KRFLamJnvQEU2PbrZEDCBPohQx75T4QcXXxrGwy2MysjBuv29388oKFgFoG9EVmhg8qfuH",
  "key31": "2RuFk4ZzvLfuzGamduCYK5KpWhfc6rNseLvycA3Z69aBo5MfhES3WQdpbTWh8famjh7QrEx4t8hPnrRpTMP1uHAw",
  "key32": "2HS2nACCUbdX91JhZndd5qDUzan1V1V4eHu7XSjYmHUZxMqAUpkHha54K8M8ZqvPo6hPabEpbbsdga9MsJ7rfqLw",
  "key33": "5kWuHzZY45wLZy8TTvRyiu28jhrgdEUyTFzpsqkfwoSVFWuBUeiDW6q1yzAWYWRKj85CcEYy9Drimz7njNTDFEog",
  "key34": "tigutzqDYTGMqEcH1sLArxuX643REQYy5igGwDMzzGJtgcdGooer4Y6tkC33RQAU28XYme9WgAxweQ4GPRut5v4",
  "key35": "2BPgm74kz7DbBprve5iMr2PvDJJNqrP7ZA1SwQMVHt5nnS5dKNnaZpHBKH4Nm1ZY4Y1S3SSrkLxvoefEQnpgusnv",
  "key36": "322bnK35LNhJM9vjgPUyBQph1cjGKHUvZk7kMKs3yckp5LVRHRvoyw1cNcQugX5MMc2bpoGLwozpug4tEJpKzBoP"
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

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
    "SmmVm61EH4Ac6hYQZm1U4ZPGxDuU8ivGxzJU1xPY9bYi3vRh16z7xdJBVdVCn9x9buG74QobgyV3N9DEWn7tqZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52dHppGmQhaQMuHcYuwhwn8M2ZnLttx9jjCqy3pokhwUc1nPSSPMpKZ2PwqMerwSF9uCuJ4yad9CX5CP7x1QQrsJ",
  "key1": "4LTY95J5MczLZes9maRymLeu1bNFrNp7wLFTfY8WtMPxc6zwZsS2npw2pDHmRVFPYeBAF3Q3spEnWNgvtMuJUdpU",
  "key2": "3Rr7dKoDjBT2LUvokmXZ4y8UafiJ7QzRMPhUncUFvs22wj1rokkiE9zLaRtwerEzuAroQmMzY6ERWjJddZ9nNgcu",
  "key3": "2vW3NtL4mPxddGScdXyz3YNG79FVEpRz9B853WJwEidTXfTzRogJyQrYaHWVsw4EJ1gRRZs1YdGMSeJ7pWJgd8cp",
  "key4": "2gSuqYkZ5MGCtMpSrMzTH3JUxTSev9EDUAK1js85QqXAreSzMtjj9KCzqT5n4WZZd54a5A7SdVDbs5T5UKiAt3wP",
  "key5": "5dyuPb7rBkzYX4vKMEFESY3EcakjTGs1Yo9GLnDgBiaWZZ7sMP38KJXzsEqVZMSnLbUvPA8XuUPWC8hu4vwniXng",
  "key6": "pg1vF5xTpuEiHMbKLouR7TeqYKVbHnTsMKTNqgyMbkXWkmJTp3qYZk3BSr3qjNKssmZTDCfRxcWKW5G8sdQC4V4",
  "key7": "2bmoKA3aUkZvY3qwRppMpZpvBCWKHaZtrEk72JBRRd8oFvgc24VsEyUkvhcy99RSiNXi6Hiw3QXvGoLGWAyzKiHB",
  "key8": "5ESPG2ck3AJcmBnEf65EkUTGYpLgn6WazfUJiRztC3iupVfz84r3Hc2Ht8FhhDNHCrihsvmKXMdRbX5acMirz6Lc",
  "key9": "2KQkDTfLEBaKpamCWL9gwSUbhRZ7KfUWKVkvMqhAqFj924Hxt9wLsxZtpRAvwDCUswZFm6TXZhWsmh5ULRU2wxG2",
  "key10": "64WLBjLuUpG6VPXJKkiye6qyq5vKh5NMa1Se1bQuGZ6LarqMmmodcGHFRpAwFwUSevMwHDmnkjokpB5tmMgXB2Ei",
  "key11": "2brkEYU6K3Hh14nSWpvaA4MGoQHoL34vL8i2xrvgfCCz6ZdNXrhGpt2ZKVmKuEbfFnp6djE7XnvFEeEcCGwq3RvB",
  "key12": "3Ra4g1GCsBjyQ9thp4hA5yPu5QFHRfoWRi3vnpauPRnTwysFvvaJEeJBRXpwXbgV7gYZD7J4PUgRd9a9f66C3Ni2",
  "key13": "67N6x5uFBD8Zo78eLvo98sruvvEvMdS7vXuoAQoGfgYo6ZUd3CE64W8K92YEK2vKogjf6xDGTB2iB6SavFBfqAsy",
  "key14": "24ZoMYmTDJjGsrmGP3fetCeSNtMTqZU5LnWX2zbdu3wvbwxnMPYuZXEjvpZLuHfsuacSnctHgcmkgFjwkniPgKuN",
  "key15": "2xV3L8Mc5HMFFue7KzTUQ4DB5kJxDmkUsYdR3VK1LQrWxcV63jpfTbuCFaa2fJVNQuFYQLxhcaRT24e3MMXw82Sk",
  "key16": "2NxvLoRmydKPS3K35AdT7uEESPA5he8QQ7WEAUuiP5ALv2vmmCgPWVG2Qx2q667E5C27EhShNmnavkBvgJqEEx5u",
  "key17": "383yfpvn3qvuZdS1jVpPQMHt4DyHgyPswLmwesaH3u9QsdjZsoNRzVJ8AucXkjkispwqaXUQ1s6jj14LjesCYSc5",
  "key18": "ogtWXFACkMDpGaaa4Js8AnVkSg57H64fAnVRHLBXR9Tn3D78L1MYRsSX7zDUKNBBZSoB46xmGjJYbSsL2PEhVqo",
  "key19": "5PVXyRjzNfjdVV8cyjvQTEgsgJKGMmiYnxQQXcRvWjkqgXQWuYcGzJngd6gMMrGPsi8ryZh2EAGzgVdMraNTX2sW",
  "key20": "3Mc7yMqas4iV8Y1TUC8UkU2BSQnxHUJjqy5QQWBpyaA9Doi36DhU8LMcMDGP7p9dmQtwYvviaiSTFUYnwqFZ3aq1",
  "key21": "8bFaXThGuHARAr2Xrvt8SWj482BNBMaGHPrw4iJAPjRn8NagY3AiRePF7cP4UD39UX4jF9CnU4ZFpZq99hkwGhk",
  "key22": "2cJY5NdiXadbPFYVY1WrqsjGejpJtnwCJMrWSmwAWyBn4w9TDiGRoETtijopkEs14KTvwWhcaDo3NsC8zvuoEneg",
  "key23": "3AkEW79QU9JibtPdmy5nrWcrCzGrsuVeNJup746Lh2QovmciwDYtfVUp2YUrfDMQTffAKKXpBrpoXJpLTTHQavez",
  "key24": "3korNDXsJtHZPJpeykEMrEWvTwCj9nTExhx1jxzZyqn1v9eTVtEWFzL5rbDv1HGLB9fL14bjxyTund1nvn9HV5HE",
  "key25": "2QDD9cdPGapmcEvnBExr7sCn67WV9ZnyzPL5rgq7udmBawnfDCq6R4HzKuTtWUzareJFBMAWqmKJfBEfLzqLj3DH",
  "key26": "4NR8tNndxz9XgbR4BmefpqS2d3EGprZCZPR3saSobFHuV5YCQZVVymp7e1tCLzcWLH4etksCMA8GZEmKUCagPv1J",
  "key27": "4AyLSPEQAEpynBGXfZAsbne1JUvY4Ae1W6X4vWtjoWyGVfCzVsv1QR6DJn1dEJ6WhSyvArqmAqAsV3BbSuGTLVMa",
  "key28": "62vaMYGtkhSYfGF6hCk1H1Cma6PVa7GuCvLPMW8PYT5pZfqhx8s49AKtzn1ntYbJahTjja76gc36qvamSgyyiDso",
  "key29": "5ondvDNBPQFQGuNRGaXz3EMbtuo9gjNzw8CFd7ABefugTG62GG79d3qG3NpYhRo4sRRcqABzh5k5Zp2qKG8LvCsL",
  "key30": "3teYBFb5x1kAg2z43vf6TZYxhBAwN7nkzMc2HiF2zncUZdJgRhv39AXZtWGtdaTCKvhDBicBriH2yWEEdJnPpAoe",
  "key31": "5zxQoWoMuqS9mLJHUoNdUVnGeXDCvY7yoEQcurDpikYF4XjSDvi2vocSNmFsZRt8AX9JtpcqrgaN8AZVAGabCaK5",
  "key32": "5HSBiB7Ap5DxhSU4zBhRiiwdADHhqe2zDE8WD67E3F6aUEj77XKNydZkRohwivrmSQf33JXXZKr3WhNEpsFXnzmV",
  "key33": "2howXjrkWHKNLEDmNJ9Do6X8eZTSjZfKk2d14LBHTWZMzx732Mu2Uid3NEEhCameEZFyAFA9ZVL3Fv4F4HXwbsiU",
  "key34": "3WBfzVdirtpP5pBa6CuCVxwjHCuNbv9djeExX4iVNNoTShz4FXe1HeGLEFnNhcRRJWeVeYg8JyUMmJxk1UArqskL",
  "key35": "4d8RbUQD244AGJ7dhwT4TJTcHMmZ6mTGsmBRCvAhAjJspKzreVV1bFe2hqmo7ZbtZ3MSdyVYqrBnP6N4fFxuUcvy",
  "key36": "2662yHX8AiePUEKv25fJegCQB1edwcLAVGwVvkUma3WxBG6jtwysjoKKeSzx851gGGhHHjH7x18QyLaV7oCKxDcn",
  "key37": "wMKw2gznACSvLLWtZHvLQbNHZhsCgD3rxBzquZDtuT6PvXg8Y3ywdhoSTqXQDCSbLVaxB2FR2Y2BDK9fiEeiQrU",
  "key38": "4dXxysWpfJ8kSvvD76YgC2GaV4fHmF9ekheDdYfA33bpQRSiBZWaPJ6QLEbLzfwoC4iRN2AGsUkV1Q4xErpGGMns",
  "key39": "4z5rEmgsW6UQbYmnu124R92ZVnBAYsgnVUvCGYyqHwkWWhaHjsJwsxp6MeMpK6HBPEWq1zfTrkT2wRgFU12uaxTa",
  "key40": "2H5NXGnq3Mf888SJ5Pvt4cmDm8GwEBfT7UjogzWd6w9xc7adzoJ3CRcBE4DUdfKoxcWcCXR4s3NYEKhFzoVmr2hB",
  "key41": "42mNvyakADkMUXKojvCb9dueABrLZG6WevXkZUDZhrqwLwf2TCZt7qNM37P3xQay9eLX2HBKzMQ6UmXJA4tSJ7Pr",
  "key42": "5HLt2SNr7h2jSERmTPq3eLjiRH4VLfZJAU6zYzxM2rsyzXRaxbVu3yJvfefjHQRqw888Let8W7Mg7zEc3PGGj6ti"
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

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
    "4gfcYKq9Fjgepduxa63xzz1KCrj9PYztmT2Hr6KP4pByvPtSv456dJhixr3dGMkDiJogquAgoFQimGmfpvMrfrCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "86h5zvEWYmS6goHE3TuTWWnYDkt1qaGsw6WyyUKNg8kV7DPi6V254W55zaqrULWBU9eY1W8rB1krFvs5H6P39HK",
  "key1": "2UYoG8VzY5edirjaWSoHLoGo7Deg6RvhnjYpDHQxeNb5h6BW6RKa7mwpwXRSbab6sQLRZhLvJKGnfgmG7o5QKokF",
  "key2": "2vFCSWGk8zaLHWyRaqRqXyQPkwnfG9xH1WAMS9Kh7hScATfsQxDCtR1zJzxFPofAPSfZdAKaTPQVTrFeq2iYUxPs",
  "key3": "5E51fMAHcBLrpj3LjBjJ2upqmiSYeyBUykqTofTUymkiBhaUELWiEc7T86YqrcXBDKUYhrRV1AgPk8FMyj3cmWVU",
  "key4": "3aqTmmBvxRn5XEVZ4JXWFKzL93CYL1c253VDs1oUEJnFfqkoum6YsF5BvmvEL6ekinnBBRiBtpfRTbDX6bezCvbA",
  "key5": "5yR68rvyTfnLWE927FiTr8HdGyLXRqw68Ng25cWMCs3XsXb9BPkmW6s9rcKNxsrTtroE6xpCDXv7pppTGkMqUSVT",
  "key6": "4BJiW42Fm8hNpaC1u28nnBM58gk7uycRNg4k289FAdUHYkHAoTgA4QeK7VCGVfZGmwniteYht4kVErBHXqzs64Gx",
  "key7": "5e7fi5WX7kPnbianD3VxzvSovcKUDP9vKhwVLKdRKBYr6qU7qguer4VsiU7WwSBvGYjf4YJV7yt6iHKTAF1uYpfx",
  "key8": "4NvSQfojFyiHR25qzUT8FJyZs6YQdSfKvx6xx6EmJVrpQ3TFmGDMdxa4sh6Je19peLACdoqyymDdanxaZXxbNq2G",
  "key9": "n5grYFughtQdHtXW9YDFCY3k8bfqYQfj93ueuNm6TKoRr98pRHX8CfsP3SmXcEfH8jbKJtRprK963gUSF4o3rEt",
  "key10": "2uLi3tPA9hA42EEB4gEn68dPKQnZMhoqjP2XCsqb2kfS1vnmk3FVngF52gR9UVmoVmmHnst8fMSviCQUGX9vdujk",
  "key11": "48afAkBG6kXaGTV8XNrgQRzBG2BbsyA6bmyjHnp5dpbJpWr27RcoRXBqNmp7CFa45P4HSNmr4ujwkeb1NcS1ngKd",
  "key12": "3eDsEnKBsDxcSuEAX93FycJqU78ixg2TVjEh4iKxiWzWehWSPXmv4MnStrvMEozXUnYVRfXiKZ2QQTEHBeTzmY5R",
  "key13": "QNfoXbFPjPhNjmtP2MRbmvCbGrf9r1P9ANxS48MQUcgM4522M2XzmQdBrH4aTLF6JrNWZhv5eubRB3CeUUDEAtR",
  "key14": "4bsPuabFtZihh8xSMrDgrgGKCYak1FJuJNquHxXZeideajGqHot1ng6EXJ8U6Sr9Gvzzei7mGA6rkZEmtrobyZXt",
  "key15": "4TSNaxA8KBQvSaaoNjFgBDDEyG1fYudozrBdc3hpkx9QJbeDAbuT6nHAtii4c5bifU6ePRaY8wijA8iuGqFvM3Ah",
  "key16": "SCYtmnffDZBk3mmitEcnz5iYYuGQdHyN9ZZDkk3JSHJQorKjjy5ECKGwR1T4LHASbnstJwbi9PubTfp1M5rEm57",
  "key17": "45eT1HxtfUTeEbVF1m3AznZN4Z78DmGuS48FNoQobdrw3UCpHHErcNHQC6rBXUE5ZyPLYv7H6JDhPNE3oZjQU48f",
  "key18": "MegeHmRqZ2QeMBPu2qzD7vNS8bkUHJvca7C2iknSJSWsFiDchv4C63QK8gwt4HrpuSUtd4eFtqos6JvFRxCF43Q",
  "key19": "2XALWGtHTATAth88J25QLVfFyaebVGCHk3yiyLHt3sJFQsKvSMdTofcyVw48YDXEeduGAGuSwEVahVktu4mW7Me5",
  "key20": "3obVtNjqLifATx7w8eJg7HLPaAkPhjq5y4rkcgLEDm7Hvg9hWoizsbpJ3qJycSvXkGrzbEUaQkSCaTykz5wQCD3x",
  "key21": "3vsqZgzEYq44MnMS8aRo9srRHzE2aN5yE8gsPHodbKEdtWv1djC3RUQdEkQRkjJVn8p1AShgYvoB4vab24UhJQRt",
  "key22": "5oDCsVviDsmVXaHeNWKVhQwPJVP5W78bBG1CU6mX9YGPtvtfJQZafAWPvjAFv8qot6ExQgn8zD7F28EDEHwrRdnu",
  "key23": "5FWANdWopPpKNhkxCe4w5EkzARBMUDhsiSmBh8D6fK7C2TsExs6WrkCE1jtin3mrVqrDidGRwYXaGNrXzoLx2Wxq",
  "key24": "3mgL8LyUCJW5jByNr9KBS7mrCJsPJ4SWVT4NUEpgN5oMg8nquQTChwEZKvY8CNXni6L8y5dST86UfvRhmxXhDAW8",
  "key25": "5yDexDbXbok4dWJGgQAs2d6XzVELyyhumSH2kYe5PKcUd854CTwzLh4eo331sMrT7V2Gym9fwGgzLDmNC9k5mLVh",
  "key26": "4Gt6Fg5tYae2Vjtvs86mU3pgrcbCHdnCsEvrgt5TycnDhYuMeAFr3YK85aHSGC7v57AB1yeibL4RU41SyGskkDVQ",
  "key27": "3y7mtZNmRUZoW2CmiQpw779o3m5tDDesS4VERZWa5xpsUngmndoSVx55wnPzzdSMtYUGGkgQxAVD8M9zs53Nb3BR",
  "key28": "N38zTqYt4ZGKtBKP7DwzsP8fkAXCr9q3HoR6EoemeDq94uPKa8aaUXtiFcQJW8XethRiHVedDLsFXC6mKs6DgnA",
  "key29": "K2Wjgmn4zeEK4roGJECKASvuuKL1ndRk24vVpfqmkrgpexaoiukdghuMiV8Ym2N1m9mWu3QmUwvGsdAYpbfTtW3",
  "key30": "2RmyD49Ad1jTC5dURhihMpNAf8SewrKeJku1kazBNbnaAJsoPDfLkQuEVfABhsBxCsKTxwCAf8EEiCinnt5GVt99",
  "key31": "xYr4Jw6e8xEmiKqEpUBVmZT3mPN617yZcwWtrshXGYBYwr9CDGHsKtF3Wh5TyrSo98ESo1fmqTNeLDHye51WpK7",
  "key32": "4Kg5EyJV3Y52M7Tb5ykuvGYEf9bFSuyaWGPaRdGC6MnYhADyLoJC1zYyLXppXj6eRWWBTpj7ZW3scyPEfCkgUgsi",
  "key33": "3fGrqR5cqHHV3pEgqbGgFA8pa1SiSorsNsMiD8W8P3CWd5MEKB12nWhzJNn8YYVQM59C19ZBjgywRUJ7StUsu8sn",
  "key34": "5iADnrXzeL2MrMHCdh9rHybBzKfeVqAfe1aZoRoHoQ4geLNsyPLu6xqzkZhrSAcns7XRdFhbyxACBU8BRBFwty4",
  "key35": "2D9Cp39JBrLccJAvQpyFXc7B1tkxfS6GUsMmN5bPWpWw1cxupYMxEF2rR4NzWNiT2wUne2XvGTwcXgvrLSaNHMw4",
  "key36": "3uKPnEWUCRDbyiQCfp82qs3pmkBFp661zcNgqKCHnUkAPLvZtbssUdPi2nZmwjGAUHf23LqejUBhUNEVRiNtfrgj",
  "key37": "eX7UeL2kSdwWYJNwCut42ZFR2awXhUW17RhNAF433efaa7amUQJMvAecikDPgE4QK9qner7v3mYH44dkaP7CiN3",
  "key38": "ma5TG73jiEMgboLksSqRB2SgP6z9ju2G9Fw1o536VJ5ESQY1FvXk7K2sLXBMqdvHmxT1cJLFhTkPuhWkwnkGpCU",
  "key39": "2p6QC765Evgv6n1JKKKdq4btktNoEkyGCmajb86iVbJPi1HXBhX4YHydwTX6xixA1XfQwVcYZPWvXSLJx7CbqFGA",
  "key40": "5bfkYHfUVHm9xuAvgPwab14K7DvM4wsDyR5YMxF6M5a73SdeBrXorraGLE3QXHsWSB8WHc4uB93yB8Nv5PhMfWPA",
  "key41": "3bPXZRTxEFSCY2oKm8VfNDaXBD7nku2HMeWP3pyuRkpFw6nFYKQgpfYRLGP16XhXy6YnNKUQMepB4fQ73ULKYdT4",
  "key42": "sxpoBWM6GAW67ddrYLQoUAfAw7u1bWfEGWmUZ1Ddy3Z1SLvZZEFTVbvtzt4rNVonr13ERLTNg8VVxXiHmkhkPqp"
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

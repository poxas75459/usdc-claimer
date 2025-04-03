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
    "39XbW7TGn8suXejfLmzVJahkw2u9rGethnjnneYZBV3A2FcPPJiattpkhcrgoyB4rSgUifDEsaGa816BVY1PEeAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C8cvcRgEVi175KhQqDsLv1R4ohWbX2Vhwrj7nW1z1ATd8JwMiTVG543aaFwqriDrHyXpD5AeckAeauCfwAXsth7",
  "key1": "iE6stHppB1cVqQq4xc2L7qzsHXSgGF6ttffmyL896jh7zUkKRtazKDp1XDZFkukjB9tjfUMDqn4Vhcx9qBQmmQ8",
  "key2": "F7zG9ftX6cyEYboTr43UDmvhtdnZNNTSQKbSCnzp8dHVE9fjjgL3v1k672hbagvBJ9q5hDe5rBsVe29H1Vs9Hhg",
  "key3": "xiMnSfmP2gUEZniByyvQUdQ8CbDvkMJk1hR42GBSQeGVKRf6tVSDqoT8fcF6SrashBfiC1PEMGj5YeEaqQzhzfh",
  "key4": "51G5zjMCbBdChRwWRMnwbpWwFmNFcCzoLJE9fuxw2ighHnwtQiBrLqv7Qs9zwxaUw44cXKWZFWjyuV8u977P82rz",
  "key5": "5YTaLnvGMoPKpPDjLFTfDMbeoUvDWNpahGGGgzJSR7AQQTAzEvgv7b9j3kBJmtGiMVeMRefXrze5EGu1aNByoBYp",
  "key6": "Bdb8jbYnNAcEXVXQetYSpuczjAUyCjW3ayjbg3JYZZGhjCS4mD1ad2QSLeTfhn4Swx9u3vEqJ3BC8Dr14GyVRkM",
  "key7": "DCjkezYkJFeQg9mTiDNLfjzyNiGN7CicxMQ8rBbUtKeJhfPr1nhbZp5RgdcueKH1Uo1WX8JTCzwGFBgMKXVAyAG",
  "key8": "354GAVwCBepADG8csEoL32fq56swGwE5WKDJdJDb4PaUsdPbXZEbiETr2L6zg8nBcVTQLSRfcTkfytN3hJx4frv3",
  "key9": "yiRHedb7br9LchGRWgVjkmTEnGMtz4h3ZtukkZHW3zR6rRKYZvM9TKrpJMBYrcDHNH75yBVsn9iLAgtZpnqeUEW",
  "key10": "5ANrn2EU1ch3ATRBuYe4SrCzixAqETXUxrpqWqKidxSyjeqcubfmvk5rzHzwLTZAeKWiDyVimQ12GzL5N4xsvNd1",
  "key11": "2N46ZvThJvKWPS17h5x18gfDa7QQQdSaaq5rwc54o6ZVYqJzXwk6aXEdsvZ88ygL2DYYnR1RCRvnYDa9ZANzx1qP",
  "key12": "Z8g4Dj2N3AaXycRBnkvqr9HRntmoivqshFZ1ipYkYMu4zGaFGdgtshNv72BQzXGh6QuzCJ1ojfvZTEzhyey9VA3",
  "key13": "2Uf7N1rVqsLngM5R5rkTyJznAaX14hSJBdb26ij3FB5yYNWQb3LaGMzKo6EpqjfQD4HbwBvQmnnUwRjRN5Rz9xwC",
  "key14": "3yfuJaB9QaHvvDrxLzSbaFLL8EqiyTU6PWLPxitHkrV6ZbJCgLc9aMzazkxyMi4yo4CcEtW4mRwumWWueUAEGYYs",
  "key15": "2HmE4hJMCfqnUVw6ievkqMSmBzq46P1Hn6pHUZ6UcsHLMZNFXAQ2Qn8xucKtbd1a3jMqu8PkMurUbiKb9kFt5dNU",
  "key16": "3ov8ruxz5ypMfEMTx91Gdieio5Tp92GnKsoHhvSy6iDds3TzYG34DNJ1JTeZmFHJ23ot6JmCmP7KPWW79mW4Lmaz",
  "key17": "eW5S4NScK387Vxhcz1HGVNFhX6Rvq9Ht69dX1f9vDQGxLXb1bcgKEYJwJB6D8kVMwHC7CR7HaqmKNrH9sLm2rxY",
  "key18": "H2oaiKjhrzJSEDswU3SLSN5xAtzChRjgirxyqhYfgjMbVABBud1MEKNbFyhcznSNsuWhdTmHi1WKnYj3Jsk8v2U",
  "key19": "3m65P9j7mM7516wB6LmAm2bcj3S5v5utfH5RXne2aAuDVwscmWhxiyb8Ry5ewkxZ2f1LVqmpqHEGZ1itpAt7dqLL",
  "key20": "HDLK2NSe3269vhDyET1NQ7agxqbaQ6ATFX6G9Fb3dD2UgS8Pq27Uk6nuXqLYCGqfGLjuGQM8tPAzWJsDDRfYhxE",
  "key21": "3UZSP18zmXeUrw1dgsmWHRXQcNt9HifV8etN2qbQWbALD8sDkAm7VtfdRrAJEepT87j4Hcio2i6GqN1SnGY9LAyu",
  "key22": "3yNJ9Y2MuC6ixWWKAXw51gkBwQxrmdVua3L98V6NVHpg7nuCvrLNGq4RWA6jiJjQyvZDKNt9kkWSihNtju1Xi4nP",
  "key23": "2R9AtPp7Zj1rzzHf73EeJTpE5yA2D1oxWzxXgsjUTmwF4SLzFzKLjwnyS1aM83wFuMPbCh6Az43GFRK3F19DXLSP",
  "key24": "5BQe4DZGeKSUhkV5dHnnMRkjSX8NMs1S5xFf3m5nWSRKnGVjsoi4jJTKXKFUJ6cfTYFP7SiMTMsNKKNvkpmawi39",
  "key25": "26Fvo26RcGnWJfRk4teimp1Jp3gEmCKjopEUcqb7v1UNCbTDw7WyQuvVudsawyMsZnj2wmrv3JqHdY1Kxx1sUcGy",
  "key26": "Djo4Hk2ta26C8MD7eYbWuHkdpwyKpr46bDQ8SufdqF58s8p7WicbKXMGRmZQfvaDwGTrbAz3T2koJXEpCcMFPHq",
  "key27": "2wD5kKkxgKXKAaKNEsaDTrS1Aismv7rMP8MKQewz8pSJrPGVePFCURPhswQiZWBH7HwPSqqfwaPNaSDUXw8eXwvE",
  "key28": "5xomZhcPd4otVPCQ9GcsnQaAtr8GfEkThcRqKD7KkkvA8pHNsE6TmCGmLBKk9eqKXos4wnETxEjEirvN3vzsxEAY",
  "key29": "2ZzPKzetrcM9tPWTdyUEKKjwyXdaxwdTk4fVUrF6wriY3814YUsV69WMyMMajTuJTCzNbsGuuhJuvXviqByiDAAm",
  "key30": "5u8ktr7GHThhUSykC4qyNZhQQdSmRYxU7TBKWX4Kzk3HZu8joniHgc1Y7izGGWaPEv2SL3Yg7TpqVTkxKJ9SGY8u",
  "key31": "JikkRUwKXwsEZUqePPqFTBte4nDAVuxG4Chjq68NoMrGTnUyXRrVpJzVL8egzqhfvxfb6VNPH9Ghgd5a6Gp1cyF",
  "key32": "2uN6VM3Uj5QjJba6SkiN3pu2zQFDdTkVmLGu7aUqG5VHLihhuZMtGyRDDMupHqRjWFQze6WTn7MZAmScYdNU6G4C",
  "key33": "3QqGfNhMuon42XvpunrSNKQLYqqb5pRawkKRQrXT5e15cjNfVCgkWjH17Px9x8CYNmXWE12Avq4SDJsQ2G9YRsoZ",
  "key34": "4owvfX3GYjmPywM1WLjyX4Bj2KL9BdspooELsDiRG9okojq1T98HVLdcM6tW8HDESn1fCabUJTfPic6E8BTVJFJq"
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

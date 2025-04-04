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
    "5T8KWviwSiv2fYstFEdMQoywkqCU9UCeu68dvYUpoDPYyNhmZxHpS22Ez91TECpYY3z2VLJd7WQ8CGvXe8c1vRXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42xUUuAyMpF6Z9jWCy3XeSJrDLbSJw6oy8XggejiNMSEQvgeTqybSAFveBkNZF6DEAm2LdkjRGoV1uViYymircv4",
  "key1": "53SPh6BAF78dmUGZ9TnAaHfdaGysDqjMDxPKknCjiPspds4uQk1YRyFXc9bvKeJ7ABnvj3drocZ6Xvnu9dxuEpAk",
  "key2": "5EmAbKNphFyUZaB3hSAbB9p7hato78snpFAr7GSZuEmRb16saH7PqKSnQkZKxxpRWbpXAND8iqWpnYJean35FFTt",
  "key3": "2xrTcf3zXJECpVdohFsxXGdurV14T6uyfkDQFzJB8SKFnP7vQBQrwE12TJjdN9zpdxQTGLjYcaci5fy2mXFSuXAo",
  "key4": "5B9UkddVcdT2ywYEH4GvpqArvyJeMfmHBx2tr4vuCSWbooSNxYjASBTgV94imaXaEr3JmUEVz2EvM14d17wqLKGv",
  "key5": "2PpSoZtnseuN8ScRH15TdVGx9eTBgHGsP4GCTRhs8kjAJJei3HTNNDvYqw8TRRkDG3MRUFxUzueWMfVBKK3TADkh",
  "key6": "xyq6WhkVYzybZDrqMmrNUt16G2xYKdxdWABuGVpdMZoEEyukqdmfficUDdkzoBs7HnJEt4fE9DM7DD3ZAmRnrHV",
  "key7": "5RXXHZWv6aNamDK5bdTJNpierewjHU4ZA63aj2jX5KuufevuzVY5NXD5ZCb9J95qifuPHnEjgohFNnnrUJvHbTJu",
  "key8": "2u8uH4Aj1drZQmgDdfCnHiaMUMSb2VSn53NBFdUdFNa8QArEupbCSXak38Z8FSiaPL2WLcKyf1YKkRtqsovijzdb",
  "key9": "RcmRn7kpw5eYbcDi4Y11oznLQcVfayPRogzXagsmTFtrbTYCCx3i37X4MV8aNMuyWD6qR53LXh4UkyAfDMu4c4X",
  "key10": "4bwwRvPATkBqqdKbmBS5mH7RbTJ3FvtZQA1cbn42BScjRJUySM9RsLwrK2JENDwcRJPzAcrSijZ1pADXWCrMW4kS",
  "key11": "2t7hZF2oTJm2WHLJKYB4tzJZGUmNEP88KneZnutB8KXELhQKbdR4iNH7sK6TkL2wuhTqNZ8SpdM1j9fH6nwQBtUZ",
  "key12": "3wkdPSdZsssJfBnsLdgkmTJFiQxuVXWU75vSw7x7yU5N72T7ragBNLsL4EGkh7voWb8ZhFZq5WHc8a4dLdv4eqta",
  "key13": "5ZZ8hCqMXq1zGJfwx8CX9QVJ715jNPptLxwYjNsmLcHkiDTqgq5DgBkjzKshxnNDmueQKbyG3h4cjdje1BSMYx35",
  "key14": "5JYyDML2sii2ypgHNRiBgnHasWQRF2e6Pj51tYGDhjYyyJZD1WgtDZuKZvcGX3Lhf5Hohu3QXnJoHcoBijJ3uKPv",
  "key15": "3PJcrxvRiACJkXnrYRaA6h1LeyAVe1eiK1oSg9Zw2rcKj2EHM1ocmTaYbi3RFx5DG7DMwjCE5RbcVLJkYpbH6zAE",
  "key16": "3RSqsXhrtFKn3UR9rCtNMmQmGBuzQUua4msz5aVih5cCZ2jZrAL1CuAWZ5Zss3rfcqCz8ze33q5YNpBCdEJan2Np",
  "key17": "2xXkjCSSFNz2aJFWF9rjHBeST79aRFa7WPcUdeK3SbkDKbNdE4L9GZhyn8mmSFTwFZSYeDFNhQWbZUoAsu33Kje7",
  "key18": "5NPXtXZZhTouW8bgXPuFD3tCDwLADJgSjSnjvxMMvbkjv7Z3XJmh4cw1kLqNnp5FiTaFiVnRJC39cqVLaqqkvahn",
  "key19": "5mxiUBxvihXiXWbcHFSgjkSyoBZ57UVWTjVnYC7enS6TTuzVFLpDQtrVHbsw6xXJrAY95cxuHUYSF9xHExDrJHfx",
  "key20": "27YETcdbJi68FBR1AVYTpWidcSw2gXVjHaorTy7TEfcYviVVDEVW4frrWhvGpabYoLs3oeSb92pgF74Jm94AZ65d",
  "key21": "2LVbPyeMFiC7VqF2fiDQkZK5VPc7mgccruJ5jaWWmpCRRWaE6jkCRCLhRtXWWp18pP2fZi2M22idEa11Mk8ySu7G",
  "key22": "4e3uKLLHCMLeEyRwLcfSPBqFHcckcGWgFyvJWxgVaUfNV8mGZuxqUN8u3hKEkxMrTRQdyzBRLLevEWAUXDaCfqym",
  "key23": "4eXsio2PmbBWAe2Yn7Q29WkpbnT5ngbN1dCnMwsmdEUbqEkxnM6iS22PoCBCBNstrndccZHreNue6Cfra8YfEtBP",
  "key24": "3XFsEQPSiJh5jzQdLDBU9rVxvLWb2v7AMY5RuhVVycPGpXrbPpRfwnz1iy5du1Nwmi6B3Z26NCoywRWjuZVED6Wd",
  "key25": "4W3s7cir5wBKZwxHjFzUDL5XLPyjmHJDwmQNhviuaCfp37TqUVHJcSdVSWX5qqZsAF1APDQiZLpBwwsSgKRJcajp",
  "key26": "61vUx2ytrggYqGo5XM2rcwj6pcLPycJbyFeu5npPVdHYUyFdGajznDDfj2ozo164SFRwPCdHidWdsh276zpsD93D",
  "key27": "4eYWEDq3YpA4XL4bdSmv3Hg6MGm4YqhFx2m21mxwS6u3BLUusFvJB8Z3wSfnS15htufJr9rjsTfHyhveuBmsii7",
  "key28": "stChS6APBGmMVTZ2kZpY42aBRCRe1seR1vqs2eQaCd3gWDynz6APXB92tPrEQX7Y1XXTUASNe14D9XWrRtcD8Ze",
  "key29": "4SKtgFeYHuY2u2mkaQgcYhhLwdeYjpr7hnPZCoiQY4r3XnftEHvGoBEaJCFWsWR92qWuvQim2LWeHWH8o9ZYdqcE"
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

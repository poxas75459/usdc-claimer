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
    "3yApvQHUs5S7EBb6avXWLXW7xrmHz47UMN1mpW4iGvXsvMK6oqHoonvq5EM5X91Wm8rMm55Fe5nZttk1quMtMYva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mcyYNQTDhFrc266z5QHg7tVV2Yc88bKTNMY5GsJrGt5WjqJJ9E3iEYgw3ot7ZpDKuYCkvsCJVDpMZYWhAcAzA4a",
  "key1": "4kfx8H7evaJ2xhng8PwLSroFnB9Lt1vrqSW8Mi5qNGdgys49HMpaG3MRoRHgeCqL3DTKXUbyaXWYQRuMtgcre2oz",
  "key2": "3uhcZWsxCmR74UFoWaVJeSNvWZDYfz6aAVM8dYDKcf1zDFuA47oG7FWhYqAb6gyiuoprweYaNcDbqHGK2BQYGhR1",
  "key3": "WucBcy3K7UraUUW5G39eq8kArE98PKCU8y6ib3CDVMNPC26UyM318pSqZ3pCZuo9bjQaR8ZKtQLoKWWeHQjdP2q",
  "key4": "tLEmLhwGeCRskhvE6WBRQ7TFb4cdShUodjA2stSYhH7sSYoEuNK2zh2gVgk3n1djsfWB4bJ3NSwU1RQipfWkLp6",
  "key5": "2Cras9w5TxonQfPbLAChjvpRbxARiaDfDhxLS5x5NgjvrjiGUWvmKhW1C1S1FTU1Pw5QJeJ17xbBJapEc2x9CAvz",
  "key6": "5i3vX3DLuuW8KrjKgptsEfbXaQ4gRKwRXcHpzAcGnntPR4wsoknEF2jf3JWKs5Gm28K9v3LXiqHV3czbeEfjeS2b",
  "key7": "4VHUjp2WhYFS3xbbaCoJaLT6PquZp1sTy5bhfMAwn6fDiH15wJMKc9gqwwcyangg2wQs5N3QC5kGxV6VLnKynZR7",
  "key8": "c8xTkJ9HA2jrxms5sNwa8sTKkZXRfmtNriNEKVttQLU9MNiqenxe3DEtWvoGhuFqp46iucyByMgFv2EpsHv18vw",
  "key9": "5vdi6kYtYw7QpPyBtKWne5kdpJc6Agf3CMuGEaAGemMGo4csNksMFTHMyysVPFcckeP8C6jjgGMX9YogxygZ9RSd",
  "key10": "3dx9AoFEaMfqNgyvGL6t1rn7ZXFVn4CoCm5mbzZ5euBBUZWvT6xH67tR51x8LW1JrRe9BJwhgoSay6vtSDJRq6pW",
  "key11": "3qNCVda5VvrhDE7Ea2CA5AM3qd9WGWovtHkrss4LBtPSixN53P6Q48PvE3YDbkdkXLrKjTz7rjz7ueAHAUNpcPnF",
  "key12": "3DB9AQ42nSCJSjgQTbnA1NPoKHxWTVXoyzRMpCNujoBfdKJbDCnxBCm5BpQdANbu1E411F1i8NYhL2M3jz3oPXjo",
  "key13": "Z7E1ACA32e8pcfjRrJrePDD9NaSADTe2nSb6i29wEDwkAZ93rcjV9FjCBxEUbpsoBZQZqbdkztjqGqBYRp74WTV",
  "key14": "3piL6kCzqYoCtMWpYKDrYvbQPKPHrB6R9c6uSN5wdwywJgkcNBtMR2S1G43WGcCvG6omEW1tNYMaJR9odSrwnyvM",
  "key15": "2s6KDrmYj8dXCEn58MXtzcVsisjVhBFVWoTLymQvsWRDEWYoevoKcLemcq5ADjthm5tuMLkQP1EnQkEMPZP2HXYQ",
  "key16": "4KeBodYWCKaArqnKEmU3M6o1QZsBc3Z5A6Ny65d6sYmtgQkLKp16fdszowvWki6xEKgscNFxzofFMY7quy954Tj5",
  "key17": "33yNryienJZYyrdXtUdvgGWprvUkg2HQs1bDSxhCUJa664jf51Yd4yyAQZkbFjGmvrRH6mpsn2FK7bTNKhc2KdHY",
  "key18": "B7r9wpfxNHdUNhTvPMRGigphJSRdtpeZcMs4bkynycckjdidFDSJCkZSDCS8tMT4soUE8r1oyU1AhELRmTqQpKw",
  "key19": "2za1phQCxEQmZZTPR8zPx9nH7Au5JV9bTUZNM8NGke28uHpkjtV9J5UBSFfSbn6oe7pBHbjLKpy2BCDnx2Ft4JwG",
  "key20": "2zJMAr2D96anGFkz7qUqWK6s96A1NfYkpNLRDzKReMECXxS2psAz2t2aoj47Xzu5FutQaEmqyX1P7Whibw9HQ118",
  "key21": "5AsAUMSCRRhRwYumjXFQtFtuRvskjzprvTRboAhtqFoZpd2vdE5RSNVMqmo3YCkTGfvQNN1cb7jB1D1T3Lzcif4a",
  "key22": "4GXYAxbvrAMDCf5FYbR6a4iM3Z5Jk3f2Uyeaf1Fqb4QJQ8CScTaFo1uLTb4bCTpWVr94gmEU8gXmcXGSK4UvuCWK",
  "key23": "3TX5psuf6FzQGLUTASCmFtK758asDVK5cVqQy54ucc39A6pZy5pouJdZ9j5QkDtktJCpTceM4m5Q66ennK8YRgEe",
  "key24": "5ZgTEenWgDM7PVSRzYA7zfPxZWeY4PAg87Gfutxnt2tj7MRVhbXf13vHvy7hd7ZQMvMdoki2puZNmKBwbAMJebMk",
  "key25": "5z2VpsSrFTX8MKuq43YrZeC3xiLjGhKoW2hmyfjwpgVN33MhUgZro1xrghz8SzW47p2tC8BdR2gZzrDdLADHqAD8",
  "key26": "5cpo2KpdjtDNj2aDMrZ7LX1J2ePgzdEhNbMPovUoBZcVqBo2usc6RJCTumH1LFijEfCZt8Z5dt4tCSoR293dw5U9",
  "key27": "3a8kMtHhcPU4u9JHBqdUuFb7LAUuVJW8ujh9T3sEY2Dd3Hgwxs55D6FJ97ViErbfMeoT56ba8h9zAB4ppDBsYY2R",
  "key28": "5ewrw6z3FeJ6Y13He76voHnmV5pHejfV8UqZRNoQ6GghVvRPM9nvsUKT2FUqTowHUPx2Pegh3yxQ3KiWvojdNa9q"
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

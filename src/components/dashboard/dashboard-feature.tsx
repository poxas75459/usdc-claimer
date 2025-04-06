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
    "55rXQ6DDL7rrNivFiLXwo36gEbeDVMqqSHJpRDQSgfG28TC8jdsavSyAVun77BCa77XjabMXbQj5kHxatmnmyN13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TW6E2amtzQ6ZgVPqiuT9CmixsRc5exKB1DaSZBvhSAr5nMTsXiPKbWRBWudbE8pySMu59okDWT1v33DHCKRhsTW",
  "key1": "4ZDcLDVhCR9Td3saEEc48GSHPJ2gDQ3dDajmj7GSc12YAAmh8bjbS4atxTj3eisDphWc3eCc9sWESh4YeaYwZobf",
  "key2": "22rLpCU1APdEgxtaRsrHANrhVwBR26TiYnoC6RcKEdHTiep3LGaTSi9ffUnVTgBUjMNGuqKjDKaqXuktqinzEHms",
  "key3": "5VDPtJYw3iw2nuf4AhRJ14ppwypdVrcX9AyrymqhdXKcDV58VwnyABq6SUAQinqJVoqQJ2iy8nDiduP3BR1xs7b5",
  "key4": "3WBAszJn6YFQRUXz2iVJ2vTc2XCvpYwt1qUDR8eVTFYsMZoQy9ZL5U78VW5UjUGJ2AEMXbLbWTpyLL646c8GSkpm",
  "key5": "3brJoz8p6oZ5xe6fPstvzqheHsRyxxuZxvckQZnd14FQrQTKAoCPKgEY7JwXonh6acE3pbc78PQtuWJDuCqXPh2h",
  "key6": "4vuUU5bJTarvyu8uHqZkiBYUJAdFCyHHgnmP9uytTibFmRCFVArmbZndGUVvk3gCbrHAmw3HesomCbVSXiDtnzm7",
  "key7": "3wgtt3zsZ6hdaa4Rp4kQaJztFaCA8zVXNvqah1gjMq5Mq8kGkSy22gRxZwm7mmwpbQEH3aE6tqTP8Fi4h9z4U4iA",
  "key8": "f99gZFjCG5bGfiNu7v2qtLRdib9STLoJPbndDYy6fzD2R9AShShe4QRa9MZ3S4qBnKd3VnYZHvQ8AjGWUfm8NpN",
  "key9": "NWzUhniomKZEBiRzCo7KTRUzYNM7pkK157F7uHdaHnPYcaiTgKUGxDYLQTPU3n46uDfP3cL75qmJEMu85J9eYHV",
  "key10": "5PFZCnb2PNP4jfjzN67Ur14gCpd7VHNH3S1APQJMRat46rUVsqxsThsY5afTm5Do3VBtUaQZRp3KibzwUaY6iecw",
  "key11": "5m8oLrTmFaKNineJVeSpZfJKF8q45ac2gJv9YAbqyX3ARicWzM5aFiZYt6w9LKoBjPmSevEquvcw7AtqXyw8Ygfq",
  "key12": "3oF4ZXhPr7brLmrrsuvfEEstaBQN1ukSmaKJx447pNtMjd4m1jZNg5Abr434ZyUzeBt9GqnY9bhcddpHEkHTUGBG",
  "key13": "3o9amBVUWczBTKQPvpkJBu2zXH6oseMma6SbywRUmxRSSQzxMKaSpWbbnTS4bUBDHYJYGW4K4dhitSHKwBasqr7N",
  "key14": "2KD9WEHbQGV7WB8aDmtVbJ6qaRo55Bm4qhbbzLSdEGGk3H1gYV4NUyK5RYL5Uo13hJ3ETxFATberHh4k8MCqCam8",
  "key15": "65NFm418x2qoLQMAgTiru5NsqkSaAAmXJupGssyCUvJUqenxVg6NNqueWv2Z4sZA2Jxd4AM1XKzTSbQZ359mbmpv",
  "key16": "zHUsj61eV2JDxnjb3s8D94mmDqVsUdujqHCGv24uRtbv4Y7Yb5LThCh3YgLkf5C34DTS1cXU4KeFo5iDbuYdRN2",
  "key17": "2C1UnyCK2jkvhyJtL5s733MSM7meDdwFY8JRbHDRTjEy4KiQeXGwbM5EcfcXrnKnMogE2Hhr8HgHUkDWSLhwidy1",
  "key18": "4mCaZ736vGRheC7kdt2uf1zmMdGBBLLLsWWHV97VfcCm5HZFhxUZCppbQQcPBozftGWrDkbhJqgA9aoBgf51kQy2",
  "key19": "117Z3wiNTiaDsXkYDNJDsb52wWXWhbTUAaPmX4BjAp9f9uF54fNRAniveZUJgTipcVjbLYX3FdWStYQA4sQTBFB",
  "key20": "5HVhqnpXtuG3V6aT3im2zB2cFAuzwgL5rmaecGQetc6925wkqareqDZ1A22M26sZ84gMdC1BmefzVqExMNWHYPpp",
  "key21": "48FaRk7UDSfQH3DDZvwbJo59U56ZPMr9ywc3KTrm8gSgsN7c9HjCGGEGa6DZUUPbJ8M4sjsiX4eiycWc1CLzd9ku",
  "key22": "3jUCV5B8XcfMJ6s7vv4dCRc2CdZ9YAE2DiRMtkjQZQSLu4Hi3CgxwNmo6K6t7jNi5Aa1JTaTVY22VobqeBnsL3S2",
  "key23": "3CkB2oVuK2xd87e9ZSdaFMrALwoGnDQ4ePpZd29WovDx4Yq6fRikWxtDEdxGCqg8fAzi8yp7ze6aXJjvU65EBKrF",
  "key24": "2iJFq1RsJUhiNi2SkBudd3vTNphYeMfC4BaZgnXtmuwveCw1DdE8NrgBsZW5jwuNGX4V9i5eL1cgGeyGru4KypUn",
  "key25": "5sMBLmJQNX6uWWcUAaTNiV8EiGw7C5Lz5R5R7RzbsQy3vJFb7TByTqxa2fkJQYgLcy5Kh2yi2KLWz6VHUeDujTds",
  "key26": "5PvTr9DZ2ofeZnEMGeM6GpmUK7A46M5XN5Nqynu735SvGY6YLxRnq4Df3dZPgH7iEMCCmS63rdAX4RwsxKrEQZKG",
  "key27": "3VJVG6srSEqyX1NXXCBbkXL4tV6jBqppBH64mXGLUTEGYsB1ypKcor6gQKSZpECofMLHnusQu91H4jwnotmoZCXX",
  "key28": "64yuXQUH5XpjjXAC7muGBBKeUpDuiGcsPJtn392Y5EaxfPRMVZHKWWLWuSdGyJZuvJK4rjLnt1V6nFRBoLN2WZjT",
  "key29": "2HLeqtsmsu7qBu791BcJmpUp4RNg2eWabywC22nGe1HL2CThaHnz76cBNDNKyV2pasdH7oHQizvU5CSURUeiBAfd",
  "key30": "37ULG28pynPMqJAnSntdQ8c99fhxJAY5CWsNqT2byFbKtmMCVQ7v4SjQfMAAr2dQvx9GUQuh1gY6QK51SYpXTVSz",
  "key31": "4wJTuNy59xfn1JhAFYmKm8ixgjtU2eCTdwrMA9hrwNTu1uh53dvMvZnNvqopMWZM9nDzH71pZsM97pQrB3YYT5o1"
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

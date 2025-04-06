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
    "2UL7Y9dquizVRkZZ63fnHwKeQyd6nJdVumS9c3QgmXHaeAbsejZoFGHQGhPqGvg57vF2q1qGRxRwrjSHjhNjPRuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cWvyDVm4EshWfjv6FPAKWboQQgeWZw9J52Y1JP1iCBiiv8r7JTqCoc3kFMm9hJPuwzNW5NpLXc7K3R5HkCbKnv2",
  "key1": "4VkaVs8nr78C2obitV2djiXPG6FECBuXPQn1SCwt2G7egyYEQvpidcspqsWvq6KDrxDj4GCwLGkR6rP88T1ixJke",
  "key2": "2KLpQSSPNpCmzNz4pYpSVizLcDQrG6oHGA1xXtquumnb5KqnPSSXUbZsiPmQNRky71ioRwBaYUiGYqYtxrZV5sNM",
  "key3": "5gs2Nkc4Ft9cVM86nzL8SkGdPVXk9vEEjDCzdMXeNHPEj7FVfLqw1qwM8144gYFow9dYsaFsTLPw98kmiKruWmdG",
  "key4": "3pNvSBHWVR8ThDBWpXYWMBG3jSXSFH4MGFa9BqRgRvbAAjSSSvYE2YPKdraLPaWqLobqnGtMYXRkZoSvtQY89gBx",
  "key5": "21VsjxG7hx69q4AEvLt4jNx738bYbxps7rtDCL9h69imxVwtnQHQSQ1SLSFC7QVB6yDg7RHybVXccJUUSwjKtKMr",
  "key6": "5CGSFSe3EuKbBqTatQDQf6nCFGse4dJW13S4V4qbVabGcMHM7fucneNA6mVaEqvoFJtdvsLNJEM1Dq62ZHuHVsTC",
  "key7": "2Hj6NQNS7ZQVL6HgfdWDfC9fnno4ZGH9dQHzrfus3dcwyCKKq2rbx2RPE47iWuGE3xmhHKgxFF7SEn5jGZaXePwR",
  "key8": "5Jo6aTq7nEHH24FSXkD6h3b6JkMs7e8NLFQcB6xWMT3Y3jQFwYQtN7jVgi6RRL5BeUuERRLeMrR8KsGx2ziUhzpU",
  "key9": "5yZpkkHq93CXkAM86xhQ3iCzo8p7LSxynpeyanWak7VmXBbrXDAUXM1N5k7QJ9S2AxGF1EkMoQYxPwVVyYaP6Ee8",
  "key10": "4sV6nu4sQntawqVktCBnzNCYScKb6xfmRnfZfe4gS8qvvYTBr9C7jbxsiyfgrnKFQ2m25N46Da5pqNSsJ1GPaaic",
  "key11": "4wVehoDu3CtzxyEaacD9cqTJBJponqTYuRSSBZzbPJn7e2Uzwagh6KG7xj85sMQbeg8Ec8pUAHVfVmPabZYzwyX2",
  "key12": "sabiTa78Ht6DfDMv9xh9JBFRHYbAiyrTsEhgh8h4wHd5ih6nBkBqgiPhEf888VijUA9HysUSjvHtd3QiiWxCvAW",
  "key13": "4ooQy56BUsS7metiWmENmiKeKHRvLUQmpCmATejiJuEJy9gv3K8ziFj9YHgoAvsGQ4Ht4GuUSXvaG1eQAaFo4iXK",
  "key14": "2sJbae3ngyFurnZGUyFinZxGrfF1B4T6Q8XNiyXEGBh4to4iceBRNxBJhYhCinfPY2QduF8zMuiCajzL8urBCBEe",
  "key15": "5szJi3TfwEqcgHyPFwhw8MbTXQKBeCwZX9zkbBYzhmYMuLvQtMd44zPCW4KoVP4Fk7wv2qqeyTrbryYWzSKRrarv",
  "key16": "vK3SYRhGkFDxFjKykviL99MqF5tNkYitA6nDHbNYuc3k7DCuY8ow74k7qunyZyvfnDiLrPkjnvPzJvXCqcNpFjR",
  "key17": "EQk944W3G9QtivNwGztARubb2WToNqQEH6VccaHBpvXio5tdGwAfexFbtJiBLD6atSSwCsL7wunHLxaC6js28SW",
  "key18": "3zEBY44msaqApJPMwybtu9ay1hX22Bxs7eMD6KWJrUsd3QDS9EtQVFUUv2W6yWLm8sv5oTMsNFEu1XKGqqZqULUB",
  "key19": "5ZMaxHNZgJCXCMEPSmb2RvyjtumiUi2gMiNoURtEVNRxSzXf3YVZndUbZC8utXkSFjquwjUcDxXN1ibxTjNvx8n1",
  "key20": "2MbVT5xMVAAMTA4tcrXoF6hiDwp2a2Ss1RD258857zikCdExeUxP5XBF3WTLsp6Ht8u2qsTr4S4L7DJWfQZ1fd8U",
  "key21": "4UgPXtmYqb8X9dzQNjHTdNw8Y2TMYMSipCajjDpubUkYwUtqwwY6oA6caVDtutofv6XeFPQRRcvpMCrrjETpLRx9",
  "key22": "5nPHKyjzWa8CBEDNAcJezFSiFfVaCrLpMWmh64itHXGX7EaewBjw9eXxhjxwhZNvWg2KVTAdsSFcYj997k88uBuh",
  "key23": "5zZ1BepX1yZfsVR7b1TLELjq7ysW4pJTAaUiyFdo7gnhp2pwBXf99sEGWtepL6E3JWV2Dwozh3EeXfJHP9Vs12jz",
  "key24": "sN3D8Ld1Gt9T61EtVQMtbgFnbpt2cxttg9u5DJhQF7TPN11wW27iLc7VPpag7enQMoviJC1c6qXA9bNym3w2WpX",
  "key25": "4aAoJKMSAN5xdjHkP784uxXqDqw2CoUE7bagQZ3ftoaiCYAW9S63szNVj67sZgnTpCTPC3DsHszqKnQkbFb2FEVc",
  "key26": "3MEyHzpK68WkikWBGtKPxyskZteibkYo9cmQqq27WoXRgYFH3McjCaURhs99Bjskf5k5WkT34DmwYWhET7YtkRmf",
  "key27": "3GBcthzcRj3Lm39dMW3rDsyfSrfMAX2RXz2pV7mVtDJncyHNRBZs4kGMpNYudtUesbGNiWE5FxnmFadZ5fWFdk7S",
  "key28": "4ztquzZpzWDiDMNiFxM62Cj57YY52Es3QUQVx6UsMiUDmmc3WazaLWUxNZud2WryMkRMgkLk8XvXmwXAQkwHuDTZ",
  "key29": "44SYpdFSoB7fgknyDLZwfYYuAaMkRJxkLBCur8qM83vVeaUhUTVrii5USmWWm4Ximb9TuYhjXPGXkK9EaDPnXFvs",
  "key30": "4Qqxg5BfztGo6nKs2frNp7vbPCNTYNL6djG1LLXypS2RhY69mmt4Ta4dp3a5V5xkYhdmBqNz6maYsQ9vju45GfCG",
  "key31": "5jspxDeYh8hWihx6SVSVrUPHD2mzZ2gKjTStSVwWnP7nmZz8n4EhQw7PDDG4YmPPNBLmstWgC5ruGmQguy8K7Z1B",
  "key32": "2aRgHKqy63w28mdCSMvDmamyboV4zFPWymfuxL7VCEKMbu3HPnMFeeP5Uig811Li5YSXxsx6E4omLXssMRHtRqGx",
  "key33": "3h3xfop5n3x87uaSvrMTAiVTm8Wx39e9vWM4BocK4EsYVLGzd28QsxoeXLxBc7Mou7X4TpoDHfJ6ZBrNeTHBQaZe",
  "key34": "2nK5NBkkabkamdY1dnoNXAynuBfdmCj8KdPdzCnCuCD6UCzkhyiaYexE5BNxMSLKeiZcVmV7NseV3UeutgR8t8CH",
  "key35": "5Uf4Qc9w7nyqbnJuKQVm3nmkwsuxemDUcgtoRtaecGH4AuRtSYzoX2c9umzXMAYEc7yw4s6h6weosQnKBqoa8rRQ",
  "key36": "3XFR1Rx1DqhykUT5G9YZ8qjyNS11F9aaSBYWaX4vsJQYaz6WJ9g9RjSU7d39pbkaKm72QLyr47GvuXfvV6bYz8vX",
  "key37": "2Po5QxK7dMvYyxZZudUHPYH54uu2jeqmYAFjT463y6TYvM9vzAeuxyCfxiAgGaAU9Zz7NZ1hudPZNHYNLunQD13j",
  "key38": "5DPXqj6EnTngftkhtS9ry8gSSo7Y3bv33uD9UDZyTCLBUc3vwLfS4QSZTRziyPMWzsvHL2HMWXrfKnkn4H9xViAF",
  "key39": "2UtsZohwmguCFJ9Cav8YPvqr7CmD299bcPQnQFYyj4zQNFwN15Qu2UhBQU8Es6S2PBNFNnVuwP4ZVwbBATAA7HEA",
  "key40": "31acBxQii4NMMRPt6XPELwgnBzjfoPYLdny5a717KzeNmHMDym6QR3Jw9wo6hYiWqbbBNjBdyf28aL6EBU2GDesV",
  "key41": "2wveQFhSbB1BtygzvKwv3PkzVkC9TaCEVhTHeoivKiB5t5vj6ruUeUcrDXuCeC1zUktstqb422xoj33vkQaXx4rT",
  "key42": "5LEYqGzFN2fZjp4Kpe7xkK7G3o52C22xekagwZSZkD3mRVZDJqDsVe2z4DakV626kAMAU47arTEgBduQfP65YBrk",
  "key43": "2wFWA26WFbNUZiJv7nptypkxsqDYvdeetEZ1u36i1gH5jt5TaXjKNz18EmPQbfnBbGNDmHnM2bWTVCzCVu48WzdX"
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

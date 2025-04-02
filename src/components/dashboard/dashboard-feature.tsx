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
    "3HqNdXPFb4ito67tbvwvrPmtikQHgjNscSeQredbhvvYxVYQYCgu2patF2KNna86oG7vX1N4Nt28onCjfwjtb2XX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ohWis6WwAJDAdbS4AEnW4bWEGg7yiwNEhj21RxtYK1umaNNL576wGkKbFwxX9gJBr2SpTdQtCGz5Aog9ERo4FS9",
  "key1": "SHkVXJbP54Thftzxo8ST3D3V75NjSUnaG2N8QccvWevKN5jUcmPJscLfsWJ2Cro6nzhYvE8iTFP2C1bXN9LvLbm",
  "key2": "5tfpsqRsWxw32yLQAPE2XQMrVKrvkZB1PVo15SFYBQKyyz7bSrrs2WF7vXR4WgVhAZ8i9Fba17XJNLc2tVKZG1qL",
  "key3": "4mcRx3yfgQ7cdWWm98j8TaLn3foJTYnaZ7pux9YhBxALCpo6xopQGEhdrg7tQDiTr49pVYnStXFyVfUdazmWdUaW",
  "key4": "Ypfjmk89kRn78Z1beKgM6HZ1r7EGFoYuqgXazPyGtHpf2TyxoWguqrcEYBZJ7dW14a9RaZ5oScADjCKfDE3LuyT",
  "key5": "2r4V1WPta9EqKpbRxpbnsZSpHjerMn6ksSTixCubtERnqfv8pFYGNSzZA1W1gFNoe2aHF7eqCibT5S1QLwvkgGL6",
  "key6": "NLUxkZ2LsLDw3Y1SfRd8iAL2gB6wViba8nUgbVi6R93jDR19LTgJjRvRPLmgpNssccqRnG22eQeHUkS2MCCu7J2",
  "key7": "63kEFfVRnmCje1pZAAUpShovxVyhArY5c8Rp93vzrkSMh3HNghwUxU3Fe4qTWgZAKBcjxooqppYNSeWApSKgt3B7",
  "key8": "PpM7oApDmfmu5g5cSyf2tQbvbyQV7yUckGMzT3GBm9nqGjpm7mhLP473RHhVSKuwgtJDUfPm14At5Fyvbdjugop",
  "key9": "2SdgGc2oAKTRDNGLwpMapE2sSCckGuXHirRkHLrk8sYEjizXHWJGRwMqx7ugWbFNrCPJ3rrTxuX7UocVuGU5HWv4",
  "key10": "eLAG79MbEY7Kqs1E1zEQPcM9cppfMcnwW8RuFbNMCTXoYhZAU2MQTMB337SRFJoFfrzMWrnWLnvDMZ4dBRcaYym",
  "key11": "3J4AnSZusYnP7oDbx9PjcAe3DohYXdEigo2H931eFfdMBAHuxYGSKi8fyazPXdCE876Yi7WF6qAUZAcgpdu7HZtM",
  "key12": "2t5pn5DAkXRenynDydMLJ66PyHKckUn4zFxTKzUL5NU7kMDqrF7s7jU7A8sE5jZws7qVRS5GNdpMqHKPJeYLwW5w",
  "key13": "3uvjpoAoS8PXfDKdng6Ahr7DrsJPx631FgxfbgRn2R3opineDrax31nMemepUXcDsKpFYDzsGjXY2wRaGaktAHAb",
  "key14": "5YLCEXxvRBRSr3oTExyjgS5beDDWJn1rZCv4VmMEFNRkGJGgA3mdWdv7eLkAqVEbiEvXJznejKaTZqAPjr4XRsnK",
  "key15": "4HPraWfeY88SQ7DzUUWvK3mKdq8E1445yX1sK6qEVPByyJnCdRE8cMu383s4MhGWBJn2SLMprvgEgsfS9TkrD8iG",
  "key16": "5ziZgRE4U2cAMkdjFAE3QvBb4aXrYDzPZTyErSK1vhj8R9FF9KUKSkASKBao3ygk7XxHGYXbabugrBzrpLBaMNVh",
  "key17": "ViB6vo88vYMzMJC7458BHqgq6D6xE7Kic1qRbFX12VpBAxh8VwYCdRgVNubt9otY2DFbiW5DwrRG8rAnsVyR3bW",
  "key18": "Bi5E7DUgccCzLBouCUgybJC414Rvhr1i3P9ExVrqVagEZXqc4LUgCRx7PMYAN1BK1chDfuCZwPeBci6hSQGngL8",
  "key19": "3KeHPXNnuwS2AqG514GHETgphfXquXxJstKSUKtezca3qpY7EMd4oygTKCvK4FZnVmXXdVLSqoSgJRAPfHwcCPoU",
  "key20": "fS7YXDz9EZKiVrb17YCrHSmnwTApao9fr2XBDngdESrWQmZSjuVEL3zDGBiWqzaJKHWCRsRaGUtp5DWk3b9jgDt",
  "key21": "3kQAqrpxwWcVzyBCCAPqXWKHhzNVZFhRNpaZPRC1ZhHL9b1JAEs52r5ybzEhzX59U89RqbB8tq7qwkER6LKABQfK",
  "key22": "33bejftgniQBx9Duz6c6gzmvpEVdirMd5gnCWCb7ZeFqkCFxGPT8F7QfkXiy7XkdCdky4jJ2eMrjYeZGiapuj71q",
  "key23": "2XdCG9fNgtMiKqjsbUAyVRZmCfVdSeHzhNMs96rbs2PpVUakGdU8Tva9UZQKtPyPVkgVLAhsBzarPbUeSAGDfocK",
  "key24": "5NJ3XBP3LMRzRqAUWQd5M5k3QiTB2VS2ZSoe3fEpsudbDJtgtAx9kKVWXdfmhpnCLnj5xc4iwAWX4b6ZkPyhGwPi",
  "key25": "QZaArTxCyTi3LzJ3GRoeCra1CrHdprb8XA5gdNa4K9jiH3KWHFZMu8YB22PXuWxyvAsSjReJ8TsYsdB6KCtLFxw",
  "key26": "2XSs9nhVfXbLCFJmVZmc8YkAsZqxjndeW7StXt9S61tXwjfyP7PGznrGJafxocVRfB59AYDcQChxr9ZqcU6ok1pB",
  "key27": "5ggiLudonFLxhbLvLq6wzYS2sM76oAkkiFgJYneGjCFBpKdPWUfCNrVZ9E94tYEx5NxfkAquYAiXnHhXGBvndhFD",
  "key28": "2vTiq3oWDJjsGs8ECriPDXCdaHDt67UpJDRbfwSsBubo8CQ7oWz2rCzx6Jck4EESLzs66cbR8jrVhyerMiaGXjzd",
  "key29": "2wLzvXh3djzjjmPiFBysQJ2hjMnc9U2XnGwsdVeH42ZTwXhX19z9XptP7PufDVvjfvXE74hD9qqc2rePb77o2X7F",
  "key30": "5VHGbo7Bzi5o8V4AzBANSYwG4YMu48sPJPv9pigPTkxYvkptZ9u67od7MSseLL4w5pLAWNm1VYywSbuW6m81wVfr",
  "key31": "3bk7SY56uBHZNy8FtcvabaBd5VDZmQpmsW8dWrgmtLbdHXCy2fwcBH6yym4Sq4Nes43RxEYiMZwtjwqLJJ7MoLo1",
  "key32": "4T3j55zBpRdn9DwG7WCctNZzxCBvE4abwLoTehJwVbdRXBhP9QSBFFePKKULy8pxPxnMqvd8etGsyiWRGceVUU9a",
  "key33": "27q8f3B5CtGiQYcA1sY8oqQBLfQMKSDRF6ubCzaDnupvA8weBqy3NL2Lu7V7K22K3TYUUXNZyxjjRU4gyZ3QMvD5",
  "key34": "3hggFDFrgMSCThf7wCQKKnbhejKHDfjhQWXHxd9b1YKeNmK3UGmEyqjHFz6SvvNbR4oycxLwwEEGMZ6sYFLaB5eb",
  "key35": "64RAjTaHjpXG646F1iymFdYxioBSsqzE8z6G8LLRmDjaBN7VhJUnV61z7LV6EHX8GnvZfiKSJCkfewzP9U1jV3fY",
  "key36": "4VaQ1hWdgjLE7vsH4VV5FFGEr4HUjfPjLLyG4h5BiQ9DXPNfBgLoDHjVkxiREMVBNmZWcPPs9bfXon61mQ7bi1BV",
  "key37": "5JQk5whhkvPtayUf25bnqNS34REKihGVqdoYHHUWd4BvLgrYepn3pFRkLVPmast1UNakvLyFT829DguG9V3XxMG9"
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

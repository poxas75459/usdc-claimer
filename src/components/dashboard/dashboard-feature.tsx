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
    "3jSgYWpjNfuPsid6eriyHzdf3gtNKujJYtfjfmtUym9EAJrRTmMgaPy4XExEyBrSFQj9kNeVNucTWserJCzLFkbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dyQbLgfuoR5RhxVYcDB1qHzE5yA2pre7aGHb7UyRvkE7CU5DtwknsMx6136DxGpTLmGPKMvS12XH3a9X8mTfoYb",
  "key1": "5ckkfhhQMoLy6WMNHfx3wEksDG3P21CcDGuVP4nEFr2yTXPNx7X2hSfAi6qt3nggsEkKK1JiJa2VSNeWdee2vS4i",
  "key2": "5yH5zpEu9DebzhtDCKRgUMiCaiD1jzzcYxwWzRVmJrtiLHvmwr6zP3XKVHYCwZJcMt7gszAQHUUidPa9JK5b1iBS",
  "key3": "3R7tYkNZtZM7XQT2JEduSGRTeTVGim2M8eUsrS18ExaYjhkxMxuEV3Bg2tXkRMwtiLZaX1KBDNt99tsQ5LHtrmkK",
  "key4": "4auHz29pDUEuhhnkeT6pWZQGkViK7k24sZsmQZYKS5fww5WNUNqmbe6gvz2NEfGhodcccDsgAkm8MMDDvpuf1V5u",
  "key5": "4wvfas8rRU8FGPhz1qTS3dGXzca7JJZiC6w7RLD8A7jwwUvwdufWzLfEKRdMsEd8Vc3MTtXPaKtT2R8j5XASVb2W",
  "key6": "5qBY917RSuBooLuzH1qsfwpeyPCqKPmKFAyKdEhSFethBzbUSS64poxfmh9TkXbJdtbxDV5RXrGJmScHMTuAsnL6",
  "key7": "2Yva1Vf7Z3LAHeMuqikFfLiFCTGstP6L9iS1hGUdQZUdcN57gyTxLNybSBKGN264QyE8M3zw8ghYa61rNDj6vLph",
  "key8": "2Vg2vHvUvBth1XATXFJqRg3ZbGczP4j9rrvKXLAX91VWhhLP26hij43cWu1c3qffakKVUqyJEx652DNXKNVkBSz9",
  "key9": "3oMBJPPo1zaetjftgqRKh1LN8bU593qaV5ZP5zDzdNDgNWdiFLEP3QddBALcoCfzTuw8ai8nnrorRHzUPpL6Bf5z",
  "key10": "3zLuUQntM2dvCS9tKevSGgPgj8ywE4wN4TTNAoKD8Kj8Dg1a6C9pxHdxMYRsqAy9ipRPXcQH9HFQMCgaEWfJ5J3e",
  "key11": "3gXQQ1cTQAcUz5eb5bjgY46SYpXRyp4noNeyx5Zqbp8xVc2tHuAJR3vjKpsC7iDfYKuF1m1EkCKzL5U5LuraUavn",
  "key12": "3UperAUunPC5KpMPr6HET2erjk5ikcbhrPTdHT1o3KrFdToV6RRMZ7NkD7pPTUwL3ETa6ek63y4wa4FsSEZi8CrR",
  "key13": "2DG586MWnDacRHFNC77QyASWJ3YKGoYGZ9qz73v2KXQQdPiqruDb213jLzXjGRnewV2kkv1wWxiw2aqvWPF9JExK",
  "key14": "4CWj9gccPEHWhrBckSE9HZWnTXwCpj3CuRWiUXYddjxPm1S7CkHE4fwrEAg5cQ6T8y7B9tcoYNZgHx4ensTerV3K",
  "key15": "4ex8ewB1vzguSMFADFUZoPE8Txv2Mq9UuE6VX3ihU2G5bv17Fe5mhT3gk4dZEjU1McxLmZv1qWWC8GqBMq8xkAj6",
  "key16": "XuBFhVA78q7QfNz2qLtyCUB2dCF5RbbhEpsPTtgAg9aa8fT7rjUNzPqkkmPNJCG7bHtgaCWKazNRcfV1qVFoNNH",
  "key17": "2TDgCDRC7Ze3qGxSACKkN3j8ZiAEsKr7aq8L9Lqpw5Z5qs3o6PXmLAiSDzobzocZBiCA72v2C6JEMXhMorK1NVMm",
  "key18": "YRnUanVVBDrfQSZHXXBLxhsg6e92V23caiTFcbPt7CmSs8eaqgjaejZSxpjngi9nf5qm9Wc1FkiQkLcQ8WRZ3AR",
  "key19": "Cqc4PAQXyzgfgQVLBfVVHWCy95eoH2mUm3A1QWrhZGkdkmLUntiofB6uM6nkpEUAsgAquDenbGzGtToSvkZeLQK",
  "key20": "2JEWfLnBbJjYYqnFWTa12KkQinxqcubmbdMrfosMd5tZbCSdmQ9MzJCu59CFq4zHDeDRttpHuSGe5m4C7iEpDAfw",
  "key21": "63urtfYhAQoitSM1AG5N2GV1QoBmkVbpGvPMrWGmssP4srk24kCFKmZmYBsYBuUBzAHxJS5EqT1KGuCaWWNFFA8a",
  "key22": "2JWZytqDKfXiwcr4XVsxN3ZeEf4We1LMASUMaB8sYessuhK9fRBhfNWSqj8iUprho7Q56nkrahhBKPe86jUcDYgc",
  "key23": "2QghcNqug9NCgdgmGQCq587KSdFrxcK4PxKAD9US7X9W1bFtx5rcL9GeV6fUUERJp9foaDntKrCBkx5QRwKs5F7E",
  "key24": "3MTz3ag559RTVsNoLB5EaXE8A4DXTxiypC2TzYVTexezYqGMJsFiCu7zqQViB4xY7F2bvM2QBcd1BkVcD3cfv2j2",
  "key25": "5vhTyCvzbKFNe4Hwo37kTkDfrKNuQALpPyWB4yp2wRsDc6742GXARtgccCedsYPRGpSLsUjcP2W2kqVVY8KTTXT8",
  "key26": "3WYagLfjhp1N12nhGpkHbbg3ZA3KR53x4MLjAf7QEM1TPhaUNbSvaAEFWiCwcXkmmjCfdiuw8Ajh1sngSTNToi7J"
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

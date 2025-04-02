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
    "5FKutR8EjmMMyyWZG71VetWS2pCq4MTRmDXze1Pw8P1GXa3zaL3YHzzYHD2UHkXSXy4SAJECyU6xVbJZfsnCmMnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oyxsP4knrxhUjHHpD9sotDNdS8R7xUo8SbM2SzaBvbhCD8tR2SsY7zj5iVnGNYpgjyyet8TfnTE7e38CwKt53J1",
  "key1": "5DXKa5LnhrVnox3DqjsU2RfLnaGHP4VXLhP4z83YxZm6F96NYGUn2mKqzsiPyZzCSNJm3h4K2nVJFLZQbViwUPCk",
  "key2": "5mhd9gAuTMgJpDm7X5Tei1Nmp9qxpS7oXJWY1LTYnn3XdYZbE8ZMrNSmvrvN1932z15jywubTku11bAAprRj6f9U",
  "key3": "216X8HfenDEocoPALCv1kUtbJbiUNiSmWGXVWMBrjHYW7NVfKaPUxCzkqT4gsNNL8aPupjtJDKFaqwgG9NJTxUAa",
  "key4": "wdexCtbyqkiocfUj3NvJNwdkiiYtELemayWD3tzYDu5v37HN7dNLdZhsxq2zZdQxwGxLkqNiKAmEjRyT2qbeg3X",
  "key5": "5hBLygDboHpfpkx4orfjYSrj2ariEGKSKJAupimNnoNk8an65C1EoM5TRwjKUQXgtFAihmNTzCUkWq7NDrKh5Fiq",
  "key6": "j187EyExHn65W6YP6ooDP73dy3yKCFasMw7QH5kCFg3WjgEw5tJj352XZm12e39Fx34epCYPeWiHK4YghCmputC",
  "key7": "qedLP5NQq432bcanBTTdYdDwA9iME2rWmxzRti1yzAhVXraa29sc3H1LfLm7vCNYZvQaXsLv6cqsZpU44R9j9t4",
  "key8": "2b642J6Vvxk5kmDuELwvuxuz4K7vhcgauzZprKrUDcuURUYEuAN9fjvnQTKReSWMESNjCD49KajsoFrk5TLgHQHa",
  "key9": "4QamrRvXF5z1NZ8AAR48jN5cXGNcUEMeFvVJHJUz1KYMCCVReb9AaXzvVt5nBxBdn2iYBrPDc1AK4iNbUMnKzjHT",
  "key10": "3rSyYDuju31uSWE1Ntkm7nhRN3KxMJotnT5JSUNgM3Hs6UTE91EFmCZdbafcqFfBL92tmn99eUEpmmWUFf82Ucg8",
  "key11": "QtvdkzMtqoWECFLd5yGkL3sVWDmMLAW6UgaofZ3KChLtrGANFPZLF5X7st7ZKbz82iEN9QRc6xnuFrHKbw7H6ob",
  "key12": "REczwKqn3Wqskvq4H2n1xNCfjXfdCbnSdExPtoi99nmmEPB8mw6K6a9vtjQYAPtyXhwnn7MUrGKhWsapEXUGjUU",
  "key13": "2GEV4UfdBCYjfaWKrA5ewCsGkWUuLx2pDpctGNFYqpW4eY1GUApVV7rs44e8tYPSG4fbJGJJoy2spBvHxVBqjhCL",
  "key14": "674er2LKRETyn2kS7vJ27xuqzGPSqykq1WhVo8t4LE4yhqjNi56xkrT9vWi8eTinMcVPk7WXE87nJGQuzJ6UWgDu",
  "key15": "2nArP4LAbC6gRBmZL83qVZ9VeTmF7tAXRwMkkeZKFaXLF98xqoV1eXWqoMiff13R5fTFAaMDxxpz5jEJHCPsW73M",
  "key16": "5L2wZSufCf8EoRkFgsxUiLUrFEquX2McfRRav7MhePStAheUirKkoMZuUWT2qwhnAq5FvZwaoTB1qHj8sX7SChde",
  "key17": "TwLQvRyfJ6evP8vPB9nDLYDxCWSg4ENTPs8M9oJLaENYHp6g7gqvnQh8zxEUrFKA5jKwdYwwVpypyQ9quER8Dnx",
  "key18": "QVdS6hnoAT9Ftr3zR54SbWpNeFxNs6EyFAH1Et9nbF2L8cbHkRrKNHTeS9jeaUjh1ENYYQGYmWkpTzK8zQ5dup5",
  "key19": "SfFF35isXg7szecc5YxfokSkkir7vMoE3R8qA3KnCg5tJReJTBALfkkLXriHyJcBXxgddZoCE1dV6X6cSyLpfyv",
  "key20": "41ijsbc6Ckt1SDE61tPK986Bsd5TstPMZ6mt4h81DCScgNoKS1MGXXcu6rNZxDqe8CDCB4Ve6bssm2XbNacXwJcE",
  "key21": "67pH3atijFD8q9493h38Ja2ktxG1rnbbeNWEWpRDy9wtdE5U2q3kdkkCGBowbcHhLzxG5SpBrW989ebzVCxoR6M",
  "key22": "RPwdeFoma9gGKNWgMVcy6piz4XEzzQTgAEhYcPGTa917N3bQa3ZenDicwnsPZQYLc6cJTz6jjxobSLgCqZX6Hkg",
  "key23": "3AgkMhiPLW8AV6fRSFm1TbKvabYqdDZaRUgf7LZrSq3LTtvsY5SSEjCru42BE8Vu6nmMBjofYiBKMPXZjptXsWQf",
  "key24": "65zvzADMTHDw6PEWoRpAYsgyvzn1fhX4e4qkordDJrRAKFhdSaAYb9oXS9AgssMNpFXamGoyd56Dt7WGn7JxTa9a"
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

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
    "54YvByCMCEnygQsXkaMD3ubk5PFJihMLcFvSsNYKgosaVLc7trn4aj7FeTxLocTPFAe5s2HQxqiX1egW6cPqSuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EJbqimKDeAMCpMzFxLuGXoEqKKfSBqBSK4DqsEFiGeaRkdmMPTRA8UcCTjbBwUpfDX4QdRstdA21CZqRAHsWUgf",
  "key1": "5E1vP3sqRzYMrSKr6fUiEXvoxPQ1Ct1mAPV4JECE7RBAgW8y9cDUG6E7sPDVEyRWQsxwcm2GVXZwcrBqCAgakyTK",
  "key2": "U95VMkks5ssG9nmApBmdt2ttpcrknaqGLLaaK1WKzaRPoJBo9saRaeVP3DWVJjWx71cCPPac7f9En4p2adc5C4P",
  "key3": "2QDn4ygKjX9664b6mXiFGENCmCeo5iMywM6L7EZjnsCXeRzsEB3VWCa2YSnaCGzut4r6utbQaKDvkyWrRezLZbDN",
  "key4": "LVLPB3VmCGuzbrPRzd5BGZVdZ8s1b8dTzQnY6prQAqpMBBX1ZY6e5egMYj87E98mdgULd6Q9AVMpj5SVwDBN9wZ",
  "key5": "4ZDxpmRXFn4w2H3FU15pckZ1Hkd6DyVwe7E6LcmiCBrT7wXFqYz9U951QbvGF1qZCXyWwp83JsfQm4vXSKsZhWzM",
  "key6": "4wDj3UHowLxnUuPP8ogtRN3hbtTDdEL2jBV2ZYzQd9oKChbSMCnfJxk3q35hdotng4vfxPiaJTfVu3VfHAsArzUi",
  "key7": "43uMdXZQcnZVkaBUdxBwvdgLwxSG7wo9YAka8DZjLEmodT8kyKoVusmgaeF7mmazqL3GiTLg9Ayas3GjgxP6C3Vv",
  "key8": "TrpQqcRaUzLJBosfWWvcnSrRC8xgkTFYZQ2sX299Gn6DwYjAf8GmdgUJZrBS1whZKFfLkXaxQeMCCCe45K8k8x2",
  "key9": "2KRMESZGxkxYXS8MrB81Nvk6on4e1RkhLd4HM4R95PVnicwuQunefzsT6urhiRZVf4d5qQcXHhyrDSBiEwLE9ZpS",
  "key10": "3T9XzM9k3kueoePsez7EmjEvaBBXcyMnEDnDcNQak373fppwq3m2fg3n8vXw6BBob1wMgXV3tFV612SLcBLZpP8c",
  "key11": "Qs9cBWsU5rB6KVjYfqacg2BUJsfy55499Qg8LvQT2hf7NDPCen4Xi2sKStV6hb8z1LoMvvyXkik1MatKfyAhd2g",
  "key12": "4jJjiEe9GqYUHfaxN2Q7bP2Y7LJk1C3C3hWS8kFxbo1zVqrhcKGjiT9fgGvYHDvzKFdjAdmmCeiLKy1C8WHzxi96",
  "key13": "248eAMqzRoUyTTm1YsYZtvYU8FsnLS2h5S9CxDoGjnL14BmUCZYwpt9cNgG3AcuNWfbUJu8npsbv7UdqE9UKBCVf",
  "key14": "EBNi7osc5G9aFDFYpHnD73gPCnUu5Crx8oogE2Bt3BnjAakuQ6q9p7JBGVgsJbCPX8axgViZudYrJYe6ESFtSjM",
  "key15": "3v76uc8R2uWwXyvbQSe4SS5bvycA3EWR7opgns8cJD1dkH3gRx1LqLgpbumJHu1da2yAa4njoafLPxLesQUp9Jqo",
  "key16": "2oF5rbrYSA93L25hahaoZgqvuXfgJPEhDi5U5sirC1QfFJxhL1Gjv8tpFLtj3mACjYz1gg4n9r4UMiUUM1ymnVLn",
  "key17": "61nAZGDXmpqNDg8J8wHdubtUXBFjnoxpdZCnAhwYcS5iCz48MnGA7GbMwbvQFqRSV2NPKEoYXkphGxcwpvm61XEe",
  "key18": "2w8v8vnpRR3DSV53vkYiKN4tCEkj1shUvu5EX1ihYDAqSyB9RKKP2jyQ1WPqa9G8gXVxetLnfBTr8WhW96QtnvgA",
  "key19": "5Auhd8XC8kN8NGaxL1W1r6Kwecm5qgcR6BDWiXPZC6Wu7LsdtDsUNj1jVNg5B67XgHDAkDUXanMiKVph4BgEPPqg",
  "key20": "67ExAwBfnHGzscvwJU76z3EEDX3SXHNpG5kfWWtJH7eSLwB9L41YFk6rCJ8duXzX9NuTZ5StG6rsZ643yAqevUGs",
  "key21": "2gwEMpQoKrr8QMmhYJucwWiBJ4gMpmxhVeLhgemDneLT9aWHGSJc6TPbQNYVmT7wkz1Q5DGdCQP5nNbVqaC2JPHN",
  "key22": "2hskeiYa4tdeKPsYXnzisL5YdF1vTtDWy6u8rbwkarJ91UVzy8osGJ4idJwAnHVLAUnxW6nKbSQt1j6fdEWG5Cuk",
  "key23": "1c8vZbm2DV9gZdhi7UDbDGVFpQjZZuokTYGYpFiDWZNDpgcRYQiRoZpHFZTaTa2iG3vEU8Td6QpdzLcneWscw5Y",
  "key24": "4BDK47rTo1VqeFqJP4NCFvZ7LUhYKHNoLsFCivxRygiv9pfU6txff3k9wJYJuRES33nfFHp4pzxS9fCAkgJfC9qu",
  "key25": "2aWMd4EahL5A79eRrExjENpsBmogKtoNyykPEqapFpbW4CMKwRHcHMCYdMd7gD9gJxXFKrGDBjvxAc78ypDmq6LW",
  "key26": "41ymSFY7PWjkCCbg7jVEpnJjzmEdpM59m2fvtMopejhiAoEdVGoyHtCUSgdTzQr4o5HSWWT2cTitaBUyjSrnNfoS",
  "key27": "3pm4ceiPrKSwWD28nqVongxwN2ekwf6Ws56zUapcTDmcnxZAHbmvhzpSPeqaWbxLPWuQLcs9G6aPFYxUaJASS2op",
  "key28": "4LoWmaR7WBi1J5DXjm1ne86grrqdibU43arbGJGG8Y1se9taaHYAyJsiCkMu9gqpHEjmJ1gmrFFsQZg8sJggNx9D",
  "key29": "HnwbdeYpYqaCEHLs8enAqNVZgzbiVU1PrWrPUHK5jqyiabnaJwo6tQu3km25Q6nsBzEskiiGxq6kViCo9CPK9fX",
  "key30": "5vKaJerN56Dz2uqw7VRtCsJBzjoqd3MvVUTG72njAFhzJTijaEcD7sGGLxsAn6ksy6kBPSeknJortiurkxUofumi",
  "key31": "3sXcxsboSWeMSaeqXRnvDNE5sJf9ved65cqntNtTgk7aRwLFZ5UhcUThW6bBBEzH7bU7nDDBfB3RT6M5ifGsXeZd",
  "key32": "5YXKULNTZuMhSPzw16gtnTGSvDutdNHE165RZrMqAKghRNoMm78o6pfGBJojjfiqSuWPMSEUvLopfQoiQqFjBF4k",
  "key33": "5bqqTvPMWb2VMq5GEV2Zyn6iTBh4YbkDihAUjvtbhayVDqXXUsn4GyQNXqfXTfJyps25FLaEWh5daq2wcX5C3sTV",
  "key34": "y1ouaLdyzmL6RAkXjAKrviGzvfRrMc6Qpu9GZ2KSP4zMS8HypFfhuWTobGvQzmsqaqX4BxEo4DE9Sna6GU4sBys",
  "key35": "54yCZoU3PDDoFe7jaFX5MW9Y4zrfhpvuTbvSMRL4rzSGJHMDFd8hkCYFnY1u3fQDBVbRujGxcZauxZZG2Z8mwjg1",
  "key36": "328CvnDcFNWYBDxgoNavbfGw5MQMQhauZWFMkdLQEoK3DRaGergKYETYHNgsMc7RB1eFurQ3u3SvPuYEAfCwSg4h"
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

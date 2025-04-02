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
    "4cwxxvmtHU4Dfx2zhHv79Vtu1KuN3cbAjJVkQrp5Lwmnar7qCZAQEZzjycWSpiueUz8J2o5MF4xotuA1yfcWLrQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjNeQDrMDrQUB9qTodzcZ63St8GR7fLfko8z3f7L7VG45waEhk2f1WnTQkkcTypFywQv9e6W24skv3YUtgN2odP",
  "key1": "2Yt6z8EVNwehLg17H5ikVukjRcS8rAfC3EqS4LBTeo3cu9vLDg9jdv6nUXRpPjkYiqsKdZeR4GAYq7FBV9nwpzF3",
  "key2": "2t9GPHyC6NN8sMXhb9xGYouqmukwZMq4JEStEQ8SC28mLvpLj75RP1jyppTfi96ctPkokq7tsSwTNxp2hVjZnbWu",
  "key3": "3KcGwmuTA7myPnxw5GJuw7hNH2b9jZay2P4b5DLi6MCZnTApQfkG7NBH7cri3FHQg5DuUvSzLAH7SKstbhN7kQCg",
  "key4": "2VMqXeuYaDEFMvQphsciuF5JENUqRCqDKuZAD9xFPm8RtSDHzHXbqSG1RW7A9iwJ9frvcHxW5DHDDdJ8N4h3x3qa",
  "key5": "2ujqECTFgmKNDpSMdpTofuGfWCA71C6kE8iT7sW5nFKMMTRKN4im44NszeX9srn2E8yiTSi2x11oGci6SdZhvfTA",
  "key6": "3Z4343hmkeye6aZVxrpDaDtN4kwPNp42FDc14m8RDksp1CcdLrZKeav1BNkQLit4DHT6uFvP1VyXArMeNt2drLsG",
  "key7": "33fMdTvoiyMgQdFjMJj7hYBNMLzuXq1nmz325EAHpQEnsHhj2AcgUqan4H166yZjYbgPSTuurbqm4KgNrPWrfFXk",
  "key8": "Jyrc6vaftCtsXXVZiicrzgR4TKaeAMyzJrVPnRyYxTDQAZsMicETbBQRPUjE5VckuyD63vvuodS1Gz88SjhRb6B",
  "key9": "WFjimeF7s7hfV8wHwRk4PfPmBr5Tf9R3vLEiF9vXvRyo4RE8NmrQaFV6rmU2Bx7zRoKZwFNi2CNBsvS1D1FsxWE",
  "key10": "4ee6zJuBoCR8hibUEk99PVWwfyCMP9VLNAryncgQ8VtjfdhYXRAAP91AwiZDF8n5JZ7PsDGwGZtT111gtc9r7eDz",
  "key11": "4oRTEitTBbphHSQRJQ7AbCAzRAvTCrAUVoGfzDhWFwndZ5vXPYZ3oK1shNqTt9DCRv8VyC3LMzNM6WdfzPXL9qK7",
  "key12": "3qmEq2fkHZjQEwdsfQS6sPKtvmzs1R6eKkSYzxzdzeJ64hTjWMD7jmCNd5D7eprURuircWKyssHTm6CxkViNZekK",
  "key13": "23oTWj99nUgQiNPfi3QrC5qDsyMa5ZRybUkebQHLbt61To1E3B8Z5wZZSumcTCPWCivKrdY1neM2zW6SkM1VPuS5",
  "key14": "21prXS2Pt6Jeig75MPh5qZFxVgUXikKQUbB77dEGMHm4oUNysPB8bx9PHkL6SiyMJePC4RTsm7ebcjQcywCCgyAE",
  "key15": "5oK8ZfP8mVAkMGNRyqh51pDqNCcQtv4yZYEMUaEt636ERKLfYYjKYQGZQxd4Gt7L4Ga6otNQEmYkMJ2fKMD8ySE",
  "key16": "3sP6zfarjHLHbXu13hDLwLhakD1pk4unWs6FCCKn97gjJUWTwF7QXdckAAS6DdxwchUSVbjHCi7D4ZwqSd4PmpV6",
  "key17": "4fdvpcQD4g2KSFqmi8W4zwLC4wW1ipt9fgGjiTanL16gjBJqiMp56TyJR4dbEVVEsbMqcakFUUaPJALfR8P8A5Ln",
  "key18": "3vR5SdzZ6q65v2Z3bzMFYdt1JUqULKgwPJsozd36sy66jfw7vLQVM5JHUG5GK1dEdBSQn9kbNRgWuXwjg4ci1EPV",
  "key19": "5KvKruGX9yu1tnDAVuZzqs1nGsCcn3md1adUGH8aJ9iLKqVsQY17rjB6NqwLUjYSVospc2qCEUY8mRRKqp5uERf7",
  "key20": "MXaRc7hy3fmK72a3ENVc4GR1gF3nqeyEFrZnanGVkH3zZ5zpJUphqi4qDdDwPmUQa5Jq4Tv3W9dbN2TegDV6Buo",
  "key21": "vC1hUSmBq9nEyKgiziwA6ZXNvPkmRF2dAPBE8noTxCroonkq2Hi9BdKP7exvNb5TCjziG3eSd2ExTraTDA3DKjM",
  "key22": "2zV56Hgw5MMomibQVvhcoR8xEJZFeqqcPwWcPJerEDwLnVqcRfBpVSXzqFWg5mmNiPVZjgmwRTWUaVbecqoW4G3Z",
  "key23": "2yENNxkjJKaZs5MLbNvxCSmnarTW9zgJnDd4JvaapSdBDs4CWThXAqRVeE556vbSTDhU7WDWkaCJ7YidmdUMmkLC",
  "key24": "5gB9gsfbxDpMQoLsRRS2gNkZxZzVcwLCFPKodcLx7fcuS3FjpdTugaNpLdvmEqVF16dbHuTvkCAX2fybDkPD4rT1",
  "key25": "5ZoTCkWr3i1DJijNaPbV21QYYbGjRdNBZRcc7Tqyg2SEbXVQyuqVnKqbg7yU2MktNzPxkEoT9HJt4JmmJR3f4Pry",
  "key26": "4DF2Do5KGjD2BnzB56A3r6nVuEE6nXuqruqwW4FZrCXpREYYmTdynpPojTC3ntKybnFqrLwBsyR5jqABoGT5eB1t"
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

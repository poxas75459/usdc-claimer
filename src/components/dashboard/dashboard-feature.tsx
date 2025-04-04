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
    "3kxcoMb8VSjEJtH2PdnqUZtu6R6HUAYZs1DJLMu6HhyeXSBw9juHdKsEPhk5Egp1HJqRYJFCmvjd868Hw6YT19kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zu6WeaefRY8Ugu9bYwTa6p7WhXqkFXotTQrDHHuahNVzbK4bYtCgfiNZS5NZcJaXdm8LUFJ6fJ6nBmvdAh3yGfr",
  "key1": "2JNvCeUoPW8JVKphXF7oAuGDTAV29oE32DuRBJkKZBmKWUVEXDhvDeaLrxaSwiJ3ssxzPR6ayBu1b6wLtbJUSfvd",
  "key2": "2826d3woZe39qPDxAXzfnnPBBqNP5HCsY8pFo5cVfqwidSosXz9nn69ecNa4N9Z54xU3PenE1v1gsp7sFokmr3M2",
  "key3": "5LLRAGo1f4BUHCdJ7m3KzvhaLEspaTgonX5fbnWWzrLnoMKTMdjiBTjrieobLzv8jdCC5bYqRM8Wg1mKamn77JBH",
  "key4": "4xQ5ssUQ2p4pBHDq4bDgCwsstr6hbZbuJEsC7V6tDPxc66CFJyFxufy3fLZSMgNzA77zqfkc9UinfPBKNi2RebGp",
  "key5": "3VtHPHgCxd4NrpPMMBoVM3x3gNJi2aBXbbhWLwNpEMKb72u3ec9ooUSHqLuf1j49o7JKwo9uWvv4z9Qu6Mdbkows",
  "key6": "5FDFXVMikQZLi7VmS4eYSPUzJFS7UD2XKZVJ4akXsmZ595WnXtZivUf47m9fs2ApT4T7v17BdfrEJdnamt5CG8ng",
  "key7": "2N7LnGiZejAGQv2n5tyaNfsJCdDS438yQKYDqwyvEzVwnPuBWxXQHF7AWDzwcuLBaFz6SM7aksLhheWpSY2TRWer",
  "key8": "3uoRdbs7ac3LXhg3tn2TbuBDL9Kg6564imzxqFDyuAyfJMmCbMcMWSge1PPRLhT1a9ZcgxDMVgBYwPg4wRP1tMC1",
  "key9": "2ZDfQjRC93P5PavhTXxsNTDyxKWCnuGTHscDxmTPbNKstsyWqsdWxk2KoGLUP9XpG8nHtb1WjcGNeUQeDkL9RAGd",
  "key10": "QRCvMVBn3JjRL6JF4BZKGsKii1U4NcBmtXnZXNCizyc61ZTuT7hyWfXKRDPbXqUc64ySdRhwHsfSLHZWAhYmWBA",
  "key11": "2zbanwtPYAafetxhcpLTq7iyg1eYL2j7Ewba5WTdNZDqECecgzKtJT8sEZPZPc2XarDLDi6BgKxWfoYgqacereJY",
  "key12": "4Bb1jdus8B1eLLxLdSfmjWUkidH88UFBJDyXY1trKvWaLcyNjsJ7MmSFXB7ET6BNU1ZiE8R78Cs7J6XSSWCMKEBQ",
  "key13": "5mM1btXAKJv2PjGa8VvsT5kKMHMigCUwocxYy2Gx9ZTP12R7ncfa6mkWYYCFTTnLBHqwRuPVEsLbBU6JnkKs7Ker",
  "key14": "5H2PAUQaJ3ZsRdebot3GeaQpn9Whp7ZnRxKSa467uPLYrztEcJCJHLqV4okAhPA1TUA9WtuZG4ADeHHbXTp3zp5b",
  "key15": "UHBagLnZonreYDnZ7d4p6xtF9CGNrNkwDe9ouNKktzP8Ljvvm4axRDEvKt1DztjL893nEdRj1wQsiBjQLXrjbED",
  "key16": "5RPRCiUnUouytNChx9dwBqTkkX87eR9F7AEt2Arik1pgSRiArbhGEfGBqq9qy4VGf3PdMCyR6W1jmeXCSynBsiVj",
  "key17": "2PBLLJqdT65QjKVhW5ZrB6NApLbAgwHLwEVqMrKHRcNVt6DngPavy3GSG3S3oQqn6EbKxzwS1Wm8qNRM1Wi1JHgy",
  "key18": "4Q6WoNDvquYBKrg8pzavKjDuRMk9WJ7CUguqnrMzEH7EDeUEFxgjgXB2MhsqTy9vFizYbbNYkmu45u9ioxgnfXtM",
  "key19": "39k4zSeZkSgZryJLoPhH8ddzpfggapxb8gqZAwHk5hTUkLDG5rSvZcPWpNAQyTU2X6XnfVmFQshi1PYb5nEytMKi",
  "key20": "4pushrVf8tC8b4AL3CBHTZT3XLFoEDwUTK3cVfQ1uTdGwxfQSHskmJZSiCDAQqCznyjvUroiWNk9cGNb5GxCKUeX",
  "key21": "38iUVgm5sGteiRNC6QEsp4cnP5wz7C8hY93U7qQfKY3HGsqp85zMoBbeWkFgHpb5Z6cCeT1XNE9bGyas82BS55CZ",
  "key22": "qQcv3mYvNZ1qaJmK4zz6T337iBwJJ6QNFUeDj6baudj4Y4wxVhPQeB7J39Th4oQ1dVQowDFPFzpRjo7zQEBGoHf",
  "key23": "66U8KB9ErKWxh22qSH71PacT64M3oUGWGpBQtbDzFgCis9dbcj2vRZ6mznn1Ua7WU53YWuZEBDxK1643Pmj7CrZk",
  "key24": "ahCdKqkVLZheyG38NeGPU8AweCVe2YiC66zgBWhjvzvXvk3Z1njSR8SZbF3H5jD68ChK3YDxQJYSa3zcCPPQCXD",
  "key25": "4P65dZDDAiNpQJ1eECcqLVYqNGPkSThKGic1CsgtmcszeUXjeXvWKLuhsqbgQHqM7R9YiUAbm2DFpaYQYwev6E1U",
  "key26": "MdzMjWcByZtMYV1dck13vyWA25k9USaGzhVqZFFKaA3f14N12wx47SKEd2Y3DkqfsXE4QV3wFjoBShktnhGgjLK",
  "key27": "3fEuf6semeBETD8iQHBrAQYYbhp7tEgaEhZT5m9nYWY31c4v8tNn7H37Ah3giLtKbt6o9gGuzNTwFZ7PupBoTHRY",
  "key28": "Qn4mDF85ApkEYkfCgUmHoLJbiUxMC8nScTGQUX62vBVn4nWQLnWF4T6Vt3ctuwfbwWpkfnzb38rvF4a4ZqQnJEz",
  "key29": "4YY6Ti1TM34dZN8Mi8weWDH6Fh1Y8RM4NYJ1c2UViZ8Hf2T7x5tQZ6LY7jhSC3AMUMpu1hDDJ31DEXtCLP68DC6Y"
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

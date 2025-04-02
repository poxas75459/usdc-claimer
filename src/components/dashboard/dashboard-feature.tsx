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
    "4fa2QiiD87xfv7pRE8FFspkHBrYcpvqJMqxSx8UaQ8739HKEN9iiLyi5wERNGvKdeNfDv8aJwyPEhQZ8WDK7ve3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yb85K96Lu4mncArXVXnK5FYxRW7xrYdfBE6cXXzMUYEdv8MD8qfNoMkivn4TKWAxWgDXskqMNJECw5vhqajdhfV",
  "key1": "1p3rpm6Cfd5ohX91NaQZ8go9fo3ZPTsvM2AWhpxRvmXhpQfNGyfX6Lr69ZL2cNmv7ccQtYZxbwkpkquYPN3idHv",
  "key2": "Nvknu5bDnotoDm1Ra9JywnCVJJDWh7afiCiUbMDajeGivjAuLYT97YNzdHSqHtdG1jGUKiYcRCAPBSabFWQ92cV",
  "key3": "4SFZjHPxwS6ysZK8LaUxKCwcLtTTDG4vAetRtPDF9wfVpQACgQJYHoqdiaGBtgP6BywjFjgz56BmSLzGEXDwSWh3",
  "key4": "3RKdXm4Bny5ktEvUkyWYGr2Dd4WHaTSxKsJ9AmqMC8itsrjM6bEQG5PVrRqLgnsvLtkW71rgMRXpudvSMk93oiNh",
  "key5": "3LHp2iCtJSbCWW7Xx5avtzmjNXGuxhzhKuTAw4jy4vwiP6tjfTdJC6vxPMMz2N5nop1LKfzQRtp2HHMFLceqsZSa",
  "key6": "5tVoWPCDRVeXBbpKBRkMnVpHxFZHPZGvQdkyqJkEmEnbfKpTBbeHjTuqcAJ6bGF18xDSvs3MC9n8oaPwLMYeyno5",
  "key7": "4ykyyvh1CLt938F4xRWTgC3YAa5WREyrkC9ctw42gLMwjyy8paYTVJMXTdpFLmVeh2VNsjSeQabyccgzv3EMM8cq",
  "key8": "2PRjUsJthQbsAQimgg61TLue8rx5Dk9M44w7SxXi3Ay5Mty25uW31jYhZPCGUFq2nnZHpBrhbxDp4F9N8rpwBrHB",
  "key9": "3Ry7nxZHNi3NrZ9EMqEjXyPVdywjAGA7TqqLVx8Ffvw9TFtghitvxw718CBHVBCCeQzPW1S9hEUBLAtr2Ggb4oNk",
  "key10": "3nj2cWt9DT5ouYCjZtBXb4UknqQp29usZ1U2ZSwUXA4LsG8yo39k7CLKd6PTNMfUhJLLsqD89ha6Zmpqe3ecUBXU",
  "key11": "3UmNnSt32HZzPoJpTpouj8HK5auviDhL9f3UUeFAQqFvSC2N2sqsj6XvhezF96j9fDQqKZFf39evTALsTKBrnXWX",
  "key12": "3NFXgMksxBZDmJMgdP2guYXJTvpL1xeAs8Cn78hJSL3wTnCxCeD6qt7HdgtFJHdzKuEJeMUxAAsERebdUjw8SDgk",
  "key13": "3ojRkdR6CxRs1ExVbp4fTm9BwBAgbkfgV2nLmaaodKtQimpCHPaM3RjxnvSeKoQbnqdM9Tvq7z4R2w1sGrzems3h",
  "key14": "4vFvechG4Fe1aqwmFpNTvYmUB6jaxDQrYhjuMT1ecwX9BPiLnxHUbhQGKecGvXNs9ZBKB7StRdqgjS4hrSAJJeEg",
  "key15": "2DpdzYyf5qd3t5f3JAKv1Lir4aJqeNcY4QqNH59bEfvxQRP2vdeRscCaX5x39Ns6a9J5CdA9ywJDtLyDMpCnRUAL",
  "key16": "51ELFBV7tuRHX8spfY6vTa427j7x81dWCfpoPmR3KY3fNsUwsZT3ecqaWPGhgvX6kibVH93NKAcRKwVUhwQMGnJ",
  "key17": "4YRk3WeNQZW5w4qjvuBAPjq5JP8rnXgrKEwT7CmQWADja5svA3KxQrYLdGQumTaGY9M7swdbkKaXaQjz42sf9Mqy",
  "key18": "2QfPPoknig1w5oCZaeExRTKijXCkLtWc9e1sWAufV3xfBkYd8WCWLEac8iztBJ3xj8t3KbUHFhtKiZjsrkPxFK21",
  "key19": "3x862GaU9LdvwSfaKcxmF41xaf8cu97rqXjatwhkG7a2mBW9Tp3JYvHa485r9cTcGUR1YM7EipvrQVUSYPpFfgsw",
  "key20": "522iun5GhfHji8oUk2W79x4Bi5cZPTnNMQcBz7rPsD7jjVv8jHukDyEe22FerX6ggeWpYL3NKWmaKrXSpEb2V7GU",
  "key21": "3cqZfTKhukj6LF9YwqLx4VULL4Yr9xxJJonAYZXy2C3aZc4PnmSmDWYjcFwYdtgpj75xhZegTPusxqs8t8NRKUgM",
  "key22": "66R99wDsCHdec1LRxXbAxHfJ1uCD1ufUPsHW6LAhyCuFZxtWVkJj2wkDmJc6rYwz8MajfM5sh95V2dLHUc1dYoTR",
  "key23": "4KsBoZFQUxqUGPdusyT9XbqpXDnDTRcs8PvMbM4nmDXVF1CHgpFXWoN4s65792imshPWjkoN81vsJbTHHvmpbuh",
  "key24": "2dRHp4JFcBYXhJ8HyRgMy2vzP5NHwvKW6JSvRycbFiDvWcTi6xWqpPRYDJHrjeWNbQMa94roAVP4PxjgfmvxLEr3",
  "key25": "3jom7rXd8WzrGPXsmXjmn1oeDAgNsu266vL7dXYPiJZLJasX6v3jdjbQK3ZtHT9EE9C4KtKbJLJ5i3Ezh8XpZunZ",
  "key26": "YexvjVkceUZn2vnTNessGddcBe88qdvEYupw5LVKYwhg67XKZ5pVyPRhi7tHB7PSUTGR55j6isNgRWRXpimJ9qs",
  "key27": "4UinMdDUo9RivTiq2fjJEMh996oJoS5z1nuC1fW7pko1n8UACFF2CQBAC1Fm9gLt7UmoJRCcpULfnLw9LnWgR9ow"
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

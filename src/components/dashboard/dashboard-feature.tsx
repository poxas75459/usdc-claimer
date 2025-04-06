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
    "2yzWWtsmNc5UYsGnHCem73okVXzrsLTo2m5yyXBAaEBmENRfrKCZgB8Rgf2v9LfQ1LboH6mEsFt3w78S8z6fMTaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yrCtQpUm1Swx533TCAqkVwgcasBnN7SvdJcujMQKnBp6CaNJ9c8CA5vu65aCa5c9qxN9kBazstPddTKCCsxs6i7",
  "key1": "5WSpB334MidWt3yDWthB7Hi1eBKxchoC95Q3UiHVg39A7EdAdg4ViybpabbPNGkUDAJFmKkRSZ5zMzoi9GPJSFRy",
  "key2": "2mrFaQqF8uAzPk3ALs9LSsuzBJmaenJKyjsQjsw3rR6LSuX2hqsiiiJ1rbR63gEwbsQexTMgFNFTjuh4ZZkhJp35",
  "key3": "GrMhcuqBVor2UVnF1yTiUEKR7utVAzqDs6EJYBHE3Jrk2QSFP4b6USNxbnQiBXJFb2S2YBUzoAoB7pu54APHsYx",
  "key4": "VicxZfbdDdygZdUYUqRPsZ7AoFWUKfq8tzxZThHpAMK23KwQrQnLZUpNTL5ZELXks717ccADT6RRkEt3uW78uPL",
  "key5": "2ggN2fS5p6YA6mqZVpYkqK18AFFznV4MUzxXm1SrRXPZZXHXVwaYT2FkR9sN55m8Ewa3Sg7dq2E5tfaj8NfYu3UF",
  "key6": "uUzUJ9XnfsC64sUj6pHkmKRnjnraMq2QxEqAFLidqyttX5ib2r3onfuNaXRZnp5uM2SsTitpaeXHJydmaq3qGj5",
  "key7": "24m3XvwoJnF7jiqJJC5Gw5ub8HyDZpKGjL9hKZvRVmikgvPTyF2KXq5vg2VfFaY5KffF1PLEDnfwdHEPsMCAQFws",
  "key8": "Q1gfa28oG6pBZdw7Y2UVtk22n5pyeErsydEydVzy6KH1cDa6mwZuop48HSZn2RCMaFi55S5mK4Em3RkhENWw5Ct",
  "key9": "2WxSK3hLw1mV4R2RDtgd7Y6ngtUMPUiWAyfi8MYPze9r8Xo1ay7abPWd1WrUxg6MLr4JfVjiMZwKi5p8B8f7c75r",
  "key10": "3V7iRSkEcL3GRpTqgY8msu3n2k5VE9E7j1vfUouiPKQWM7phadZ1kkoAVaFRW4REF7SNF77rywbgFFxr6vK5ViZf",
  "key11": "4HuMadN6NdKznKGrfMbG5QWALHow27FsQfYcVaBZCinRf1hTprKV1XudQLqrLWRQY5E84TfcMdVxMJbBiDTgEnnW",
  "key12": "45rM9dVADYUSV72ZSNQRJHMVTcqiDurtqDm8eGW9Eb3LDHt2ctZHaTcsWj7FEdhyTaJuir8GKtcb5QtbnVC43e5i",
  "key13": "3Svm1YVgd2z7frjWLBjDkTZB3exeyv7PF2pK3GBAfV579LGzTLFchCXAzvLWh1QDuGM9cy9vjQ1D3YFf6h8QJfU9",
  "key14": "3fqcQMENEXSVtZv6dYoEL7Mh4mN74SVWSPv7uAtt4ar78SRpe8kcMPKb2bxknp9KB7CycGnpKprzRSHVVohTHwPh",
  "key15": "urnjNjAVRWVEjaX7hzSx7kvZypG7u8PkQnEoghkBgFnYZsGLXPwxphJtVTqQqUPF49y8Fg4gZF8nvywsUSVwWJB",
  "key16": "3t5GmwjhwZTQaVeE9gPDKvpRwRc2Jq234QKoyLDYp5nmwyn1d9rhwHXEq8ExUEmkgjXSnKHcRqQZ4bvfqWMpiaP3",
  "key17": "3TUdeBnFRmBXjZ6yvBCQRxaj5Uai44PBqRLvaPYyZ4VUjgWhVMZc7PN4pDPQdeFakunFmhhVmBRZDTrtQfyerwMD",
  "key18": "dEgbXWU9sKAUaW8w5Z98rYYSde777vo2U1YAuBFBS6ZCUK41UaUCpnpvQso16jrwutL2gpS6hNsfYdiLKe81LS9",
  "key19": "2AQCFqrTSRSHgPP9u4zCRjNX4AU4H7qFE4xsj87xiTiFx67BNtc5uSLgktqn98whds3aew7jaQMwnG77PR6B1vH3",
  "key20": "2Jjd88seMeU1AqD4qpCA1gZeh8KqwfFMSDKBb5CjbUDD4wrLAiDtg4VPVgoxNi44d7Lv9CRo626GaNG9wRDBaA9S",
  "key21": "3LZxSLhpLTmUBn6uvNkUgNU78S91yxc3TUabharbUmB2GCAn6iNePUQpjxKMwLJoRhxuSLGP94wcbFWWUGxVHVhV",
  "key22": "x3GfDHFussdJzubMCYsUP3oDQ6ufY4vXhGfWxABv3oPS78Kw9zG1fjRvo6LYyFJugx56EdodecbqfUJfuDYNqWd",
  "key23": "3UdkRSJePUSdsUSNWgaq5vw7Lp3RpE1VKphTMndKtsVpxT27HrcoAapRWhDKLeouK5zEDxmcgvWqgiHgLoAtNjvy",
  "key24": "5HuypgS7o7C4zqACmqjqGQPvCK6n7KuiqwjPn3QZhB7iaKhWRJKmXLEnnCgjseZiAZwRhkG3q5srwDEdevWnEiHZ",
  "key25": "4p5P48j25zbdE9vNu4CDUGWmb6XkFmT5e76nujweDe5UVRDtyeRHDtReWaozpzpAcoRKeFoEc3PSP9TkEZEdtdzs",
  "key26": "2bpPVmWJ8bJ52c3x5hqGPMKjSoanGyg5hPLfeZLmx1WgmuHN7E3dAzX4UkEEfY48oYV65rqp1KZUZ6N8vYaU8yGC",
  "key27": "2Q7JABN9RxpXKbwfn1Y23Sgm5osdCvfKzywwqiV1H211ZNFEFicZ3dkFXZAW4htUtspa5x9TdPgFAFv5ZV5dtimV",
  "key28": "ychARfcqTfnKurYCyru9KFBLDkNjB57CY36mr3ko4VZeJVQ13Q7CN9bovU4nZxAGrdutBtfWce6NE3nosHXG245",
  "key29": "5Cqeg2mp6i9GwgB8m9fH12jGCHqpdAJMSJDNiqZNxLQV8JZYSmkKNqBB99mugPCAMKjixw2U83Eh5CarLLjwNAXE",
  "key30": "2n71oUa2itH7kG66voAcAyrgSQWwQUiwrzmoXxFoXuLeqvSa6JKypdHJpZwHjr3MBEP72ownByeMduqiMhZtnXCx",
  "key31": "4caFTKEq32jqN7LzH3DT6TsNx7NcfL63p9kf6JAKTvuojo8UqFQLPWYfsw1T3VvKeTu91g7qPUM5EAa5VHHb9Fog",
  "key32": "2ByijDLMPZKGL9bba4oteaFftD6W1wHpoxy7FENe26ijAKALfEXXYSSJQ6pUhbxu1W69WkNcTdQ6R2iok1QZp8H3",
  "key33": "5Fti8RMuZZsWqC7VPFcP6WF3SPDRkP2wqP7xzxXWCGeCAw3DFcDRLKmmSui2ELRjSxEvZWXW4sEmWcxeqjVwcAYR"
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
